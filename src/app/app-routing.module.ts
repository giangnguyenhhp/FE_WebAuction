import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from "./containers/admin-layout/admin-layout.component";
import {MainLayoutComponent} from "./containers/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'role',
        loadChildren:()=> import('./Views/role/role.module').then(m=>m.RoleModule)
      },
      {
        path:'user',
        loadChildren:()=> import('./Views/user/user.module').then(m=>m.UserModule)
      }
    ]
  },
  {
    path: 'main',
    component: MainLayoutComponent,
    children:[

    ]
  },
  {
    path:'authentication',
    loadChildren:()=> import('./Views/authentication/authentication.module').then(m=>m.AuthenticationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
