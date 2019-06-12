import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { MaterialModule } from "../../vendor";
import { BoxModule } from "angular-admin-lte";
import { PagingComponent } from "./paging/paging.component";

@NgModule({
  declarations: [
    PagingComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [    
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BoxModule,
    PagingComponent
  ],
  providers: [
    DatePipe
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class SharedModule {
}
