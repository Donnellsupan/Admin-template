import { NgModule } from '@angular/core';
import { UserAdminComponent } from './admin/user-admin.component';
import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule
    
  ],
  declarations: [UserAdminComponent, ProfileComponent]
})
export class UsersModule {}
