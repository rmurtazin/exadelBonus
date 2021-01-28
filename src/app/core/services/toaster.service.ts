import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(public toastr: ToastrService) { }

  showSuccess(message: string, title: string){
    this.toastr.success(message, title, {
      positionClass: 'toast-top-center'
    })
  }

  showError(message: string, title: string){
    this.toastr.error(message, title, {
      positionClass: 'toast-top-center'
    })
  }

  showShow(message: string, title: string){
    this.toastr.show(message, title, {
      positionClass: 'toast-top-center'
    })
  }

}
