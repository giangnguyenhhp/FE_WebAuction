import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from "./containers/admin-layout/admin-layout.component";
import {MainLayoutComponent} from "./containers/main-layout/main-layout.component";
import {NotFoundComponent} from "./Views/not-found/not-found.component";
import {LoginGuard} from "./Views/authentication/Guard/login.guard";
import {PrivacyComponent} from "./Views/privacy/privacy.component";
import {ForbiddenComponent} from "./Views/forbidden/forbidden.component";
import {AdminGuard} from "./Views/authentication/Guard/admin.guard";
import {UserProfileComponent} from "./Views/user/Components/user-profile/user-profile.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate:[LoginGuard,AdminGuard],
    children: [
      {
        path: 'role',
        loadChildren: () => import('./Views/role/role.module').then(m => m.RoleModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./Views/user/user.module').then(m => m.UserModule)
      },
      {
        path:'product',
        loadChildren: () => import('./Views/EntityModels/product-model/product-model.module').then(m => m.ProductModelModule)
      },
      {
        path:'category',
        loadChildren: () => import('./Views/EntityModels/category-model/category-model.module').then(m=>m.CategoryModelModule)
      },
      {
        path:'lot-product',
        loadChildren: () => import('./Views/EntityModels/lot-product-model/lot-product-model.module').then(m=>m.LotProductModelModule)
      },
      {
        path:'comment',
        loadChildren:()=>import('./Views/EntityModels/comment-model/comment-model.module').then(m=>m.CommentModelModule)
      },
      {
        path:'card-member',
        loadChildren:()=>import('./Views/EntityModels/card-member/card-member.module').then(m=>m.CardMemberModule)
      },
      {
        path:'contact',
        loadChildren:()=>import('./Views/EntityModels/contact-model/contact-model.module').then(m=>m.ContactModelModule)
      },
      {
        path:'post',
        loadChildren:()=>import('./Views/EntityModels/post-model/post-model.module').then(m=>m.PostModelModule),
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainLayoutComponent,
    children: []
  },
  {
    path:'privacy',
    canActivate:[LoginGuard],
    component:PrivacyComponent
  },
  {
    path:'user-profile',
    canActivate:[LoginGuard],
    component:UserProfileComponent
  },
  {
    path: 'authentication',
    loadChildren: () => import('./Views/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path:'forbidden',
    component:ForbiddenComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
