import { SharedModule } from './../../../shared/shared.module';
import { FooterComponent } from '@components/footer/footer.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FooterComponent],
  imports: [SharedModule],
  exports: [FooterComponent],
})
export class FooterModule {}
