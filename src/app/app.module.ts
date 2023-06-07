import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './view/side-menu/side-menu.component';
import { LoadPageComponent } from './view/load-page/load-page.component';
import { SummaryComponent } from './view/summary/summary.component';
import { IssuesComponent } from './view/issues/issues.component';
import { SitesComponent } from './view/sites/sites.component';
import { GuidesComponent } from './view/guides/guides.component';
import { CustomLinkChekerComponent } from './view/custom-link-cheker/custom-link-cheker.component';
import { PricingComponent } from './view/pricing/pricing.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import { SideMenuSearchComponent } from './view/side-menu-search/side-menu-search.component';
import { SiteComponent } from './view/site/site.component';
import { LinkWebComponent } from './view/link-web/link-web.component';
import { RegisterComponent } from './view/register/register.component';
/*import { LoginComponent } from './view/login/login.component';*/
import { ContactUsComponent } from './view/contact-us/contact-us.component';
import { CustumLinkCheckComponent } from './view/custum-link-check/custum-link-check.component';
import { SidbarComponent } from './view/sidbar/sidbar.component';
import { SearchComponent } from './view/search/search.component';
import { HomeClientComponent } from './view/home-client/home-client.component';
import { FooterNavComponent } from './view/footer-nav/footer-nav.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./view/login/login.component";
import {JwtInterceptor} from "./controler/interceptors/jwt.interceptor";
import { WithSidebarComponent } from './view/pages/with-sidebar/with-sidebar.component';
import { WithoutSidebarComponent } from './view/pages/without-sidebar/without-sidebar.component';
import { DashnavbarComponent } from './view/dashnavbar/dashnavbar.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import {HomeComponent} from "./view/dashboard/charts/home/home.component";
import { BarChartComponent } from './view/dashboard/charts/bar-chart/bar-chart.component';
import { LinksCardsComponent } from './view/dashboard/charts/links-cards/links-cards.component';
import { CercleChartProduitComponent } from './view/dashboard/charts/cercle-chart-produit/cercle-chart-produit.component';
import { CercleChartLinksComponent } from './view/dashboard/charts/cercle-chart-links/cercle-chart-links.component';
import { ButtonsComponent } from './view/dashboard/charts/buttons/buttons.component';
import {ChartModule} from "primeng/chart";
import { LineChartComponent } from './view/dashboard/charts/line-chart/line-chart.component';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    SideMenuComponent,
    LoadPageComponent,
    LoginComponent,
    SummaryComponent,
    IssuesComponent,
    SitesComponent,
    GuidesComponent,
    CustomLinkChekerComponent,
    PricingComponent,
    SideMenuSearchComponent,
    SiteComponent,
    LinkWebComponent,
    RegisterComponent,
    ContactUsComponent,
    CustumLinkCheckComponent,
    SidbarComponent,
    SearchComponent,
    HomeClientComponent,
    FooterNavComponent,
    WithSidebarComponent,
    WithoutSidebarComponent,
    DashnavbarComponent,
    NotFoundComponent,
    BarChartComponent,
    LinksCardsComponent,
    CercleChartProduitComponent,
    CercleChartLinksComponent,
    ButtonsComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    HttpClientModule,
    ChartModule,
    InputSwitchModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
   {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
