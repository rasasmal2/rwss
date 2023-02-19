import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEditorModule } from "ngx-editor";


// mat module import start
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
// import { MatCarouselModule } from 'ng-mat-carousel';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TextFieldComponent } from '../../components/common/text-field/text-field.component';
import { TextAreaComponent } from '../../components/common/text-area/text-area.component';
import { SelectSearchComponent } from '../../components/common/select-search/select-search.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// mat module import end
import {
  FormsModule,
  ReactiveFormsModule,
  } from "@angular/forms";
import { ButtonComponent } from '../../components/common/button/button.component';
import { MatModalComponent } from '../../components/common/mat-modal/mat-modal.component';
import { TableComponent } from '../../components/common/table/table.component';
import { EditTableComponent } from '../../components/common/edit-table/edit-table.component';
import { DatePickerComponent } from '../../components/common/date-picker/date-picker.component';
import { MultiSelectComponent } from '../../components/common/multi-select/multi-select.component';


@NgModule({
  declarations: [
    TextFieldComponent,
    TextAreaComponent,
    SelectSearchComponent,
    ButtonComponent,
    MatModalComponent,
    TableComponent,
    EditTableComponent,
    DatePickerComponent,
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    // MatCarouselModule.forRoot(),
    MatTableModule,
    MatTabsModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatDialogModule,
    AgGridModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NgxEditorModule,
    MatTreeModule,
    MatSlideToggleModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatProgressBarModule,
    AgGridModule,
    NgxEchartsModule,
    NgxEditorModule,
    MatDialogModule,
    MatTreeModule,
    MatSlideToggleModule,

    TextFieldComponent,
    TextAreaComponent,
    SelectSearchComponent,
    ButtonComponent,
    MatModalComponent,
    TableComponent,
    EditTableComponent,
    DatePickerComponent,
    MultiSelectComponent
  ]
})
export class SharedModule { }
