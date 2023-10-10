import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { MappageComponent } from './mappage/mappage.component';
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { TransportPageComponent } from './transport-page/transport-page.component';
import { CargoTransportPageComponent } from './cargo-transport-page/cargo-transport-page.component';
import { CargoTransportOfPortPageComponent } from './cargo-transport-of-port-page/cargo-transport-of-port-page.component';
import { MyAccountPageComponent } from './my-account-page/my-account-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MyAddedItemsPageComponent } from './my-added-items-page/my-added-items-page.component';
import { AddCargoTransportPageComponent } from './add-cargo-transport-page/add-cargo-transport-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SearchInNavBarComponent } from './navbar/search-in-nav-bar/search-in-nav-bar.component';
import { PortDashboardPageComponent } from './port-dashboard-page/port-dashboard-page.component';
import { DashboardItemComponent } from './port-dashboard-page/dashboard-item/dashboard-item.component';
import { SingleDataComponent } from './port-dashboard-page/dashboard-item/single-data/single-data.component';
import { TableComponent } from './port-dashboard-page/dashboard-item/table/table.component';
import { GraphBarComponent } from './port-dashboard-page/dashboard-item/graph-bar/graph-bar.component';
import { PieChartComponent } from './port-dashboard-page/dashboard-item/pie-chart/pie-chart.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'map', component: MappageComponent },
  { path: 'search', component : SearchPageComponent},
  { path: 'add-cargo-transport', component : AddCargoTransportPageComponent},
  { path: 'cargo-transport-of-port', component : CargoTransportOfPortPageComponent},
  { path: 'cargo-transport', component : CargoTransportPageComponent},
  { path: 'contact', component : ContactPageComponent},
  { path: 'login', component : LoginPageComponent},
  { path: 'my-account', component : MyAccountPageComponent},
  { path: 'register', component : RegisterPageComponent},
  { path: 'my-added-items', component : MyAddedItemsPageComponent},
  { path: 'port-dashboard', component: PortDashboardPageComponent},
  { path: 'transport', component : TransportPageComponent},
  { path: '**', component : NotfoundpageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MappageComponent,
    NotfoundpageComponent,
    NavbarComponent,
    SearchPageComponent,
    TransportPageComponent,
    CargoTransportPageComponent,
    CargoTransportOfPortPageComponent,
    MyAccountPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MyAddedItemsPageComponent,
    AddCargoTransportPageComponent,
    AdminPageComponent,
    ContactPageComponent,
    SearchInNavBarComponent,
    PortDashboardPageComponent,
    DashboardItemComponent,
    SingleDataComponent,
    TableComponent,
    GraphBarComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterLink,
    RouterOutlet,
    BrowserAnimationsModule,  //ngx-charts dependency
    NgxChartsModule,          //ngx-charts library
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
