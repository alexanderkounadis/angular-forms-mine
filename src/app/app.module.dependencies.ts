import { AppComponent } from './app.component';
import { PizzaFormContainerComponent } from './containers/pizza-form-container/pizza-form-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule
  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectedPizzaViewerComponent } from './components/selected-pizza-viewer/selected-pizza-viewer.component';
import { PizzaSizePickerComponent } from './components/pizza-size-picker/pizza-size-picker.component';

export const APP_MODULE_DECLARATIONS = [
    AppComponent, 
    PizzaFormContainerComponent,
    NavbarComponent,
    SelectedPizzaViewerComponent,
    PizzaSizePickerComponent
];

export const APP_MODULE_IMPORTS = [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule
];