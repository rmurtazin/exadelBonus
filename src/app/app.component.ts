import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResponsiveService } from '@services/responsive.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ExadelBonus';
  private subscriptionResize: Subscription;
  constructor(private responsiveService: ResponsiveService) {}

  public ngOnInit(): void {
    this.getSize();
  }

  private getSize(): void {
    this.subscriptionResize = this.responsiveService.getMobileStatus().subscribe();
    this.onResize();
  }

  public onResize(): void {
    this.responsiveService.checkWidth();
  }

  public ngOnDestroy(): void {
    this.subscriptionResize.unsubscribe();
  }
}
