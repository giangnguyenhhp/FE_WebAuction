import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DefaultHeaderComponent} from './containers/admin-layout/default-header/default-header.component';
import {DefaultFooterComponent} from './containers/admin-layout/default-footer/default-footer.component';
import {AdminLayoutComponent} from './containers/admin-layout/admin-layout.component';
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule, ButtonModule,
  DropdownModule, FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  SidebarModule, UtilitiesModule
} from "@coreui/angular";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {IconDirective, IconModule, IconSetService} from "@coreui/icons-angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainLayoutComponent} from './containers/main-layout/main-layout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {ErrorHandlerService} from "./Views/authentication/Interceptor/error-handle.interceptor";
import {LoginInterceptor} from "./Views/authentication/Interceptor/login.interceptor";
import {PrivacyComponent} from './Views/privacy/privacy.component';
import {JwtModule} from "@auth0/angular-jwt";
import { ForbiddenComponent } from './Views/forbidden/forbidden.component';
import {NotFoundComponent} from "./Views/not-found/not-found.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    AdminLayoutComponent,
    MainLayoutComponent,
    PrivacyComponent,
    ForbiddenComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GridModule,
    SidebarModule,
    PerfectScrollbarModule,
    IconDirective,
    IconModule,
    HeaderModule,
    NavModule,
    BreadcrumbModule,
    BadgeModule,
    DropdownModule,
    AvatarModule,
    HttpClientModule,
    MatDialogModule,
    ListGroupModule,
    MatAutocompleteModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5001'],
        disallowedRoutes: []
      }
    }),
    FormModule,
    ButtonModule,
    UtilitiesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    },
    IconSetService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
