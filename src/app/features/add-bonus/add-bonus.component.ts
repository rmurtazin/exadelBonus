import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import {
  IBonusFormConfig,
  ILocation,
  INewBonus,
  INewVendor,
  IVendor,
} from '@interfaces/add-bonus.interface';
import { BonusAddressService } from '@services/bonus-address.service';
import { BonusesService } from '@services/bonuses.service';
import { VendorsService } from '@services/vendors.service';
import { Subscription } from 'rxjs';
import { BonusComponent } from '../../shared/components/bonus-list-container/bonus/bonus.component';
import { Router } from '@angular/router';

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
  public bonusId: string;
  public isForm: boolean;
  public bonusButtonLabel = '<img class="update-img" src="assets/images/pencil.png" alt="update bonus" /> Edit';

  constructor(
    public bonusAddressService: BonusAddressService,
    public vendorsService: VendorsService,
    public bonusesService: BonusesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.getBonuses();
    this.initialBonusFormConfig();
    this.bonusId = this.route.snapshot.paramMap.get('id');
    this.isFormActive = Boolean(this.bonusId);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public initialBonusFormConfig(): void {
    this.bonusFormConfig = {
      vendorNameChange: (vendorName: string): void => {
        if (vendorName?.length === 1) {
          const previousInput = this.vendors[0]?.name[0]?.toLowerCase();
          if (previousInput !== vendorName?.toLowerCase()) {
            this.getVendors(vendorName);
          }
        }
      },
      closeForm: (): void => {
        this.isFormActive = false;
        this.locations = [];
      },
      addAddress: (myForm: any): void => {
        this.onAddAddress(myForm);
      },
      createNewVendor: (newVendor: INewVendor): void => {
        this.createVendor(newVendor);
      },
      createBonus: (newBonus: INewBonus): void => {
        this.subscription.add(
          this.bonusesService.addBonus(newBonus).subscribe(() => {
            this.getBonuses();
          }),
        );
      },
      removeVendors: (): void => {
        this.vendors = [];
      },
    };
  }

  public getBonuses(): void {
    const bonusesCount = '6';
    const query = `?LastCount=${bonusesCount}`;
    this.bonusesService.getBonuses(query).subscribe((data) => {
      this.bonuses = data;
    });
  }

  public getBonusesByVendorId(vendorId: string): void {
    const query = `?CompanyId=${vendorId}`;
    this.bonusesService.getBonuses(query).subscribe((data) => {
      this.bonuses = data;
    });
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

  public getVendors(query): void {
    this.subscription.add(
      this.vendorsService.getVendors(query).subscribe((data) => {
        this.vendors = data;
      }),
    );
  }

  public createVendor(newVendor: INewVendor): void {
    this.subscription.add(
      this.vendorsService.createVendor(newVendor).subscribe((data) => {
        this.newVendor = data;
      }),
    );
  }

  public openForm(): void {
    this.isFormActive = true;
  }

  public onBonusButtonClick(): void {
    this.isForm = !this.isForm;
  }

  public openEditForm(bonusComponent: BonusComponent): void {
    this.router.navigate([`/bonuses/${bonusComponent.bonus.id}`]).then();
  }
}
