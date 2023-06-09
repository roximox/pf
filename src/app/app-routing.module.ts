import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GuidesComponent } from './view/guides/guides.component';
import { CustomLinkChekerComponent } from './view/custom-link-cheker/custom-link-cheker.component';
import { HomeComponent } from './view/dashboard/charts/home/home.component';
import { IssuesComponent } from './view/issues/issues.component';
import { LoadPageComponent } from './view/load-page/load-page.component';
import { PricingComponent } from './view/pricing/pricing.component';
import { SummaryComponent } from './view/summary/summary.component';
import { SitesComponent } from './view/sites/sites.component';
import { RegisterComponent } from './view/register/register.component';
import { ContactUsComponent } from './view/contact-us/contact-us.component';
import { SideMenuSearchComponent } from './view/side-menu-search/side-menu-search.component';
import { LinkWebComponent } from './view/link-web/link-web.component';
import { HomeClientComponent } from './view/home-client/home-client.component';
import { LoginComponent } from './view/login/login.component';
import { WithoutSidebarComponent } from './view/pages/without-sidebar/without-sidebar.component';
import { WithSidebarComponent } from './view/pages/with-sidebar/with-sidebar.component';
import { AuthGuard } from './controler/auth/auth.guard';
import {NotFoundComponent} from "./view/not-found/not-found.component";
import {CustumLinkCheckComponent} from "./view/custum-link-check/custum-link-check.component";
import {AddSiteComponent} from "./view/add-site/add-site.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: '',
    component: WithoutSidebarComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'link-web', component: LinkWebComponent },
      { path: 'load', component: LoadPageComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'facture', component: HomeClientComponent },

    ],
  },
  {
    path: 'dashboard',
    component: WithSidebarComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'summary', component: SummaryComponent },
      { path: 'sites', component: SitesComponent },
      { path: 'issues', component: IssuesComponent },
      { path: 'guides', component: GuidesComponent },
      { path: 'custom', component: CustomLinkChekerComponent },
      { path: 'home', component: HomeComponent },
      { path: 'custom-checker', component: CustumLinkCheckComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'add-site', component: AddSiteComponent },

    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
