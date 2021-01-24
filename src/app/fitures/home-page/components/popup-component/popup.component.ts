import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { IBonus } from 'interfaces/.';
import { SharedService } from 'services/comunication.service';
import { SharedModule } from 'shared/shared/shared-modules/shared.module';
import { ModalComponent } from '../modal-component/modal.component';

@Component({
  selector: 'popup-component',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() bonus: IBonus;
  @Input() title: string;
  @Input() description: string;
  @Output() changeLocation = new EventEmitter();
  constructor( private dialog: MatDialog,private shared: SharedService) {}
  ngOnInit(): void {}
  showModal(){
    this.shared.sendClickEvent();
    //this.changeLocation.emit();
    this.dialog.open(ModalComponent,{data: {bonus: this.bonus}});
  }
}
