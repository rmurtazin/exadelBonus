import { OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { ILocation, INewBonus, IVendor } from '@interfaces/add-bonus.interface';
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
  public subscriptionBonusAddress: Subscription = new Subscription();
  public subscriptionGetVendors: Subscription = new Subscription();
  public subscriptionCreateVendors: Subscription = new Subscription();
  public subscriptionCreateBonus: Subscription = new Subscription();
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
    this.subscriptionBonusAddress.unsubscribe();
    this.subscriptionGetVendors.unsubscribe();
    this.subscriptionCreateVendors.unsubscribe();
    this.subscriptionCreateBonus.unsubscribe();
  }
  public vendorNameChange(vendorName: string): any {
    if (vendorName && vendorName.length === 1) {
      return this.getVendors();
    }
  }
  public createNewVendor(newVendor: any): any {
    return this.createVendor();
  }
  public addAddress(myForm: any): void {
    if (myForm.value.bonusAddress) {
      this.subscriptionBonusAddress.add(
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
    this.subscriptionGetVendors.add(
      this.vendorsService.getVendors().subscribe((data) => {
        this.vendors = data;
      }),
    );
  }
  public createVendor(): void {
    // TODO here should be post method for created new vendor
    this.subscriptionGetVendors.add(
      this.vendorsService.createVendor().subscribe((data) => {
        this.newVendor = data;
      }),
    );
  }
  public createBonus(newBonus: INewBonus): void {
    this.subscriptionCreateBonus
      .add
      // this.bonusesService.addBonus(newBonus).subscribe((data) => data)
      ();
  }
  public openForm(): void {
    this.isFormActive = true;
  }
  public closeForm(): void {
    this.isFormActive = false;
    this.locations = [];
  }
}
