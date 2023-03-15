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
  BreadcrumbModule,
  DropdownModule,
  GridModule,
  HeaderModule,
  NavModule,
  SidebarModule
} from "@coreui/angular";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {IconDirective, IconModule, IconSetService} from "@coreui/icons-angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainLayoutComponent} from './containers/main-layout/main-layout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {ErrorHandlerService} from "./Views/authentication/Interceptor/error-handle.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    AdminLayoutComponent,
    MainLayoutComponent
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
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    },
    IconSetService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
