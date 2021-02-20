import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ITranslatedToastrInfo } from '@interfaces/translated-toaster-info.interface';
import { Subscription } from 'rxjs';

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

  public showCustomNotification(key: string, properties: object): Subscription {
    return this.translate.get(key).subscribe((translatedToastrInfo: ITranslatedToastrInfo) => {
      this.showCustomAlert(translatedToastrInfo.message, translatedToastrInfo.title, properties);
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

  public showCustomAlert(
    message: string,
    title: string,
    customProperties: Partial<IndividualConfig>,
  ): void {
    this.toastr.show(message, title, customProperties);
  }
}
