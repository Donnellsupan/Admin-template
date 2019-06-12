import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxModule, BoxSmallModule as MkBoxSmallModule  } from 'angular-admin-lte';
import { UserAdminComponent } from './admin/user-admin.component';
import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/vendor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    //BrowserAnimationsModule,
    //CommonModule,
    //BrowserModule,
    
   // FormsModule,
    // FlexLayoutModule,
    //MaterialModule,
    SharedModule,
    UsersRoutingModule
    
  ],
  declarations: [UserAdminComponent, ProfileComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UsersModule {}
