import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule, 
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule
    ],
    declarations: []
}
)
export class SharedModule{}