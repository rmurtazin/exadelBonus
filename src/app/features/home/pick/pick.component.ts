import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResponsiveService } from '@services/responsive.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pick',
  templateUrl: './pick.component.html',
  styleUrls: ['./pick.component.scss'],
})
export class PickComponent implements OnInit, OnDestroy {
  public isMobile: boolean;
  private subscriptionResponsive: Subscription;

  constructor(private responsiveService: ResponsiveService) {}

  public ngOnInit(): void {
    this.onResize();
    this.responsiveService.checkWidth();
  }

  public onResize(): void {
    this.subscriptionResponsive = this.responsiveService.getMobileStatus()
    .subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

  public ngOnDestroy(): void {
    this.subscriptionResponsive.unsubscribe();
  }
}
