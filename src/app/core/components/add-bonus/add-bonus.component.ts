import { OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { ILocation, IVendor } from '@interfaces/add-bonus.interface';
import { BonusAddressService } from '@services/bonus-address.service';
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

  constructor(public bonusAddressService: BonusAddressService, public vendorsService: VendorsService) {}

  public ngOnInit(): void {
    this.getVendorsByFirstWord()
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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

  public getVendorsByFirstWord (): void {
    this.vendorsService.getVendors().subscribe(
      data=>{
        this.vendors = data;
        console.log(data)
      }
    )
  }

}
