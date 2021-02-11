import { OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { IBonusFormConfig, ILocation, INewBonus, IVendor } from '@interfaces/add-bonus.interface';
import { BonusAddressService } from '@services/bonus-address.service';
import { BonusesService } from '@services/bonuses.service';
import { VendorsService } from '@services/vendors.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-bonus',
  templateUrl: './add-bonus.component.html',
  styleUrls: ['./add-bonus.component.scss'],
})
export class AddBonusComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription();
  public locations: ILocation[] = [];
  public vendors: IVendor[] = [];
  public newVendor: IVendor;
  public bonuses: IBonus[] = [];
  public isFormActive = false;
  public bonusFormConfig: IBonusFormConfig;

  constructor(
    public bonusAddressService: BonusAddressService,
    public vendorsService: VendorsService,
    public bonusesService: BonusesService,
  ) {}

  public ngOnInit(): void {
    this.getBonuses();
    this.initialBonusFormConfig();
  }

  public ngOnDestroy (): void {
    this.subscription.unsubscribe();
  }

  public initialBonusFormConfig(): void {
    this.bonusFormConfig = {
      vendorNameChange: (vendorName: string): void => {
        if (vendorName?.length === 1) {
          this.getVendors();
        }
      },
      closeForm: (): void => {
        this.isFormActive = false;
        this.locations = [];
      },
      addAddress: (myForm: any): void => {
        this.onAddAddress(myForm);
      },
      createNewVendor: (newVendor: IVendor): void => {
        this.createVendor(newVendor);
      },
      createBonus: (newBonus: INewBonus): void => {
        this.subscription.add(this.bonusesService.addBonus(newBonus).subscribe())
      },
    };
  }

  public getBonuses(): void {
    this.bonusesService.getBonuses().subscribe(
      (data: IBonus[]) => {
        if (data) {
          this.bonuses = data.filter((_, idx)=>idx < 5)
        }
      },
    );
  }

  public onAddAddress(myForm: any): void {
    if (myForm.value.bonusAddress) {
      this.subscription.add(
        this.bonusAddressService.getSearchedAddress(myForm.value.bonusAddress).subscribe((data) => {
          if (data) {
            this.locations.push({
              latitude: data[0].geometry.lat,
              longitude: data[0].geometry.lng,
              city: data[0].components.city,
              country: data[0].components.country,
              address:
                data[0].components.road && data[0].components.house_number
                  ? `${data[0].components.road}, ${data[0].components.house_number}`
                  : '',
            });
          } else {
            myForm.get('bonusAddress').reset();
          }
        }),
      );
    }
  }

  public getVendors(): void {
    this.subscription.add(
      this.vendorsService.getVendors().subscribe((data) => {
        this.vendors = data;
      }),
    );
  }

  public createVendor(newVendor: IVendor): void {
    // TODO here should be post method for created new vendor
    this.subscription.add(
      this.vendorsService.createVendor(newVendor).subscribe((data) => {
        this.newVendor = data;
      }),
    );
  }

  public openForm(): void {
    this.isFormActive = true;
  }
}
