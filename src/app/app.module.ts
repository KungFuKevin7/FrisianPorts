import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MappageComponent } from './pages/mappage/mappage.component';
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { TransportPageComponent } from './pages/transport-page/transport-page.component';
import { CargoTransportOfPortPageComponent } from './pages/cargo-transport-of-port-page/cargo-transport-of-port-page.component';
import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MyAddedItemsPageComponent } from './pages/my-added-items-page/my-added-items-page.component';
import { AddCargoTransportPageComponent } from './pages/add-cargo-transport-page/add-cargo-transport-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchInNavBarComponent } from './pages/navbar/search-in-nav-bar/search-in-nav-bar.component';
import { PortDashboardPageComponent } from './pages/port-dashboard-page/port-dashboard-page.component';
import { DashboardItemComponent } from './pages/port-dashboard-page/dashboard-item/dashboard-item.component';
import { SingleDataComponent } from './pages/port-dashboard-page/dashboard-item/single-data-collection/single-data/single-data.component';
import { TableComponent } from './pages/port-dashboard-page/dashboard-item/pie-chart/table/table.component';
import { GraphBarComponent } from './pages/port-dashboard-page/dashboard-item/graph-bar/graph-bar.component';
import { PieChartComponent } from './pages/port-dashboard-page/dashboard-item/pie-chart/pie-chart.component';
import { SingleDataCollectionComponent } from './pages/port-dashboard-page/dashboard-item/single-data-collection/single-data-collection.component';
import { CargotransportTableComponent } from './pages/cargotransport-table/cargotransport-table.component';
import { TransportOverviewComponent } from './pages/transport-page/transport-overview/transport-overview.component';
import { CargoTableComponent } from './pages/transport-page/transport-overview/cargo-table/cargo-table.component';
import { CargoPiechartComponent } from './pages/transport-page/transport-overview/cargo-piechart/cargo-piechart.component';
import { CargoOnBoardComponent } from './pages/add-cargo-transport-page/cargo-on-board/cargo-on-board.component';
import { SearchResultListComponent } from './pages/search-page/search-result-list/search-result-list.component';
import { SearchResultComponent } from './pages/search-page/search-result-list/search-result/search-result.component';
import { SearchPageInputComponent } from './pages/search-page/search-page-input/search-page-input.component';
import { AddedItemsTableComponent } from './pages/my-added-items-page/added-items-table/added-items-table.component';
import { FilterPeriodComponent } from './pages/my-added-items-page/filter-period/filter-period.component';
import { MapComponent } from './pages/mappage/map/map.component';
import { PortsOnMapComponent } from './pages/mappage/ports-on-map/ports-on-map.component';
import {FormsModule} from "@angular/forms";
import { NavSearchResultListComponent } from './pages/navbar/search-in-nav-bar/nav-search-result-list/nav-search-result-list.component';
import { SearchResultPortComponent } from './pages/search-page/search-result-list/search-result-port/search-result-port.component';
import { DashboardFilterComponent } from './pages/port-dashboard-page/dashboard-filter/dashboard-filter.component';

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
