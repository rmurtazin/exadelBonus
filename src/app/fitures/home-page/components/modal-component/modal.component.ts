import { Component, Input, OnInit } from '@angular/core';
import { IBonus, ICompany } from 'interfaces/.';
import { Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    bonus: IBonus;

    constructor(@Inject(MAT_DIALOG_DATA) private data: any){
        this.bonus = this.data.bonus;
    }
    ngOnInit(): void {}
}
