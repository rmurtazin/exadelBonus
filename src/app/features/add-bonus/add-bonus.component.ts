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
import { Router } from '@angular/router';
import { BonusComponent } from 'src/app/shared/components/bonus-list-container/bonus/bonus.component';

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
  public bonusButtonLabel = '<img class="update-img" src="assets/images/pencil.png" alt="update bonus" /><span>Edit</span>';

  constructor(
    private bonusAddressService: BonusAddressService,
    private vendorsService: VendorsService,
    private bonusesService: BonusesService,
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
        if (vendorName === '') {
          this.getBonuses();
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
          const result = data[0];
          if (data) {
            this.locations.push({
              latitude: result.geometry.lat,
              longitude: result.geometry.lng,
              city: result.components.city,
              country: result.components.country,
              address: `${result.components.highway || result.components.road || ''} ${
                result.components.house_number || ''
              }`,
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

  public openEditForm(bonusComponent: BonusComponent): void {
    this.router.navigate([`/bonuses/${bonusComponent.bonus.id}`]).then();
  }
}
