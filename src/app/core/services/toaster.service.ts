import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ITranslatedToastrInfo } from '@interfaces/translated-toaster-info.interface';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private toastr: ToastrService, private translate: TranslateService) {}

  public showNotification(key: string, type?: string): any {
    return this.translate.get(key).subscribe((translatedToastrInfo: ITranslatedToastrInfo) => {
      switch (type) {
        case 'success': {
          this.showSuccess(translatedToastrInfo.message, translatedToastrInfo.title);
          break;
        }
        case 'error': {
          this.showError(translatedToastrInfo.message, translatedToastrInfo.title);
          break;
        }
        default: {
          this.showShow(translatedToastrInfo.message, translatedToastrInfo.title);
          break;
        }
      }
    });
  }

  public showSuccess(message: string, title: string): void {
    this.toastr.success(message, title, {
      positionClass: 'toast-top-center',
    });
  }

  public showError(message: string, title: string): void {
    this.toastr.error(message, title, {
      positionClass: 'toast-top-center',
    });
  }

  public showShow(message: string, title: string): void {
    this.toastr.show(message, title, {
      positionClass: 'toast-top-center',
    });
  }
}
