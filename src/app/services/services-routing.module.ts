import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { ServiceAdminComponent } from './admin/service-admin.component';

const routes: Routes = [{
  path: '',
  component: ServicesComponent
}, {
  path: 'services',
  component: ServicesComponent
}, {
  path: "services/admin",
  component: ServiceAdminComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
