import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxModule, BoxSmallModule as MkBoxSmallModule  } from 'angular-admin-lte';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ServiceAdminComponent } from './admin/service-admin.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    BoxModule,
    MkBoxSmallModule
  ],
  declarations: [ServicesComponent, ServiceAdminComponent]
})
export class ServicesModule {}
