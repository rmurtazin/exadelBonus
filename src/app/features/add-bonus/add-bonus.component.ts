import { OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
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
  public isFormActive = false;

  constructor(
    public bonusAddressService: BonusAddressService,
    public vendorsService: VendorsService,
    public bonusesService: BonusesService,
  ) {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public vendorNameChange(vendorName: string): IVendor[] {
    if (vendorName?.length === 1) {
      return this.getVendors();
    }
  }

  public createNewVendor(newVendor: string): IVendor[] {
    return this.createVendor();
  }

  public addAddress(myForm: any): void {
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
            // TODO: add notification "No such address exists or address is not complete!"
          }
        }),
      );
    }
  }

  public getVendors(): IVendor[] | any {
    this.subscription.add(
      this.vendorsService.getVendors().subscribe((data) => {
        return (this.vendors = data);
      }),
    );
  }

  public createVendor(): IVendor | any {
    // TODO here should be post method for created new vendor
    this.subscription.add(
      this.vendorsService.createVendor().subscribe((data) => {
        this.newVendor = data;
      }),
    );
  }

  public createBonus(newBonus: INewBonus): void {
    this.subscription.add(this.bonusesService.addBonus(newBonus).subscribe((data) => data));
  }

  public openForm(): void {
    this.isFormActive = true;
  }

  public closeForm(): void {
    this.isFormActive = false;
    this.locations = [];
  }
}
