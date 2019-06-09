import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAdminComponent } from './admin/user-admin.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [{
    path: 'profile',
    component: ProfileComponent
}, {
    path: "users/admin",
    component: UserAdminComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
