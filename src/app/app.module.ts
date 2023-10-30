import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { MappageComponent } from './mappage/mappage.component';
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { TransportPageComponent } from './transport-page/transport-page.component';
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
import { SingleDataComponent } from './port-dashboard-page/dashboard-item/single-data-collection/single-data/single-data.component';
import { TableComponent } from './port-dashboard-page/dashboard-item/pie-chart/table/table.component';
import { GraphBarComponent } from './port-dashboard-page/dashboard-item/graph-bar/graph-bar.component';
import { PieChartComponent } from './port-dashboard-page/dashboard-item/pie-chart/pie-chart.component';
import { SingleDataCollectionComponent } from './port-dashboard-page/dashboard-item/single-data-collection/single-data-collection.component';
import { CargotransportTableComponent } from './cargotransport-table/cargotransport-table.component';
import { TransportOverviewComponent } from './transport-page/transport-overview/transport-overview.component';
import { CargoTableComponent } from './transport-page/transport-overview/cargo-table/cargo-table.component';
import { CargoPiechartComponent } from './transport-page/transport-overview/cargo-piechart/cargo-piechart.component';
import { CargoOnBoardComponent } from './add-cargo-transport-page/cargo-on-board/cargo-on-board.component';
import { SearchResultListComponent } from './search-page/search-result-list/search-result-list.component';
import { SearchResultComponent } from './search-page/search-result-list/search-result/search-result.component';
import { SearchPageInputComponent } from './search-page/search-page-input/search-page-input.component';
import { AddedItemsTableComponent } from './my-added-items-page/added-items-table/added-items-table.component';
import { FilterPeriodComponent } from './my-added-items-page/filter-period/filter-period.component';
import { MapComponent } from './mappage/map/map.component';
import { PortsOnMapComponent } from './mappage/ports-on-map/ports-on-map.component';
import {FormsModule} from "@angular/forms";
import { NavSearchResultListComponent } from './navbar/search-in-nav-bar/nav-search-result-list/nav-search-result-list.component';
import { SearchResultPortComponent } from './search-page/search-result-list/search-result-port/search-result-port.component';
import { DashboardFilterComponent } from './port-dashboard-page/dashboard-filter/dashboard-filter.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'map', component: MappageComponent },
  { path: 'search', component : SearchPageComponent},
  { path: 'add-cargo-transport', component : AddCargoTransportPageComponent},
  { path: 'cargo-transport-of-port', component : CargoTransportOfPortPageComponent},
  { path: 'cargo-transport', component : SearchPageComponent},
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
    PieChartComponent,
    SingleDataCollectionComponent,
    CargotransportTableComponent,
    TransportOverviewComponent,
    CargoTableComponent,
    CargoPiechartComponent,
    CargoOnBoardComponent,
    SearchResultListComponent,
    SearchResultComponent,
    SearchPageInputComponent,
    AddedItemsTableComponent,
    FilterPeriodComponent,
    MapComponent,
    PortsOnMapComponent,
    NavSearchResultListComponent,
    SearchResultPortComponent,
    DashboardFilterComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        RouterLink,
        RouterOutlet,
        BrowserAnimationsModule,  //ngx-charts dependency
        NgxChartsModule,          //ngx-charts library
        RouterModule.forRoot(routes),
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
