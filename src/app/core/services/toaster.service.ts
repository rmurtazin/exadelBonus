import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }

  public showSuccess(message: string, title: string): void {
    this.toastr.success(message, title, {
      positionClass: 'toast-top-center'
    });
  }

  public showError(message: string, title: string): void {
    this.toastr.error(message, title, {
      positionClass: 'toast-top-center'
    });
  }

  public showShow(message: string, title: string): void {
    this.toastr.show(message, title, {
      positionClass: 'toast-top-center'
    });
  }

}
