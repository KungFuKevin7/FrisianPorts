import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MappageComponent } from './pages/mappage/mappage.component';
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { NotfoundpageComponent } from './pages/error-pages/notfoundpage/notfoundpage.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { TransportPageComponent } from './pages/transport-page/transport-page.component';
import { CargoTransportOfPortPageComponent } from './pages/cargo-transport-of-port-page/cargo-transport-of-port-page.component';
import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AddCargoTransportPageComponent } from './pages/admin-page/adding-items/add-cargo-transport-page/add-cargo-transport-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchInNavBarComponent } from './pages/navbar/search-in-nav-bar/search-in-nav-bar.component';
import { PortDashboardPageComponent } from './pages/Dashboards/port-dashboard-page/port-dashboard-page.component';
import { SingleDataComponent } from './pages/Dashboards/dashboard-data-displays/single-data/single-data.component';
import { TableComponent } from './pages/Dashboards/dashboard-data-displays/table/table.component';
import { GraphBarComponent } from './pages/Dashboards/dashboard-data-displays/graph-bar/graph-bar.component';
import { PieChartComponent } from './pages/Dashboards/dashboard-data-displays/pie-chart/pie-chart.component';
import { SingleDataCollectionComponent } from './pages/Dashboards/port-dashboard-page/single-data-collection/single-data-collection.component';
import { CargotransportTableComponent } from './pages/cargotransport-table/cargotransport-table.component';
import { TransportOverviewComponent } from './pages/transport-page/transport-overview/transport-overview.component';
import { CargoTableComponent } from './pages/transport-page/transport-overview/cargo-table/cargo-table.component';
import { CargoPiechartComponent } from './pages/transport-page/transport-overview/cargo-piechart/cargo-piechart.component';
import { AddLoadedTransportComponent } from './pages/admin-page/adding-items/add-loaded-transport/add-loaded-transport.component';
import { SearchResultListComponent } from './pages/search-page/search-result-list/search-result-list.component';
import { SearchResultComponent } from './pages/search-page/search-result-list/search-result/search-result.component';
import { SearchPageInputComponent } from './pages/search-page/search-page-input/search-page-input.component';
import { MapComponent } from './pages/mappage/map/map.component';
import {FormsModule} from "@angular/forms";
import { NavSearchResultListComponent } from './pages/navbar/search-in-nav-bar/nav-search-result-list/nav-search-result-list.component';
import { SearchResultPortComponent } from './pages/search-page/search-result-list/search-result-port/search-result-port.component';
import { DashboardFilterComponent } from './pages/Dashboards/port-dashboard-page/dashboard-filter/dashboard-filter.component';
import { SmallSingleDataCollectionComponent } from './pages/Dashboards/port-dashboard-page/small-single-data-collection/small-single-data-collection.component';
import { NavBarInputComponent } from './pages/navbar/search-in-nav-bar/nav-bar-input/nav-bar-input.component';
import { InternalServerErrorPageComponent } from './pages/error-pages/internal-server-error-page/internal-server-error-page.component';
import { LoadingAnimationComponent } from './pages/loading-animation/loading-animation.component';
import {LoadingInterceptor} from "./pages/loading-animation/loading.interceptor";
import { SearchFilterComponent } from './pages/search-page/search-filter/search-filter.component';
import { ProvinceDashboardPageComponent } from './pages/Dashboards/province-dashboard-page/province-dashboard-page.component';
import { ProvinceDataViewComponent } from './pages/Dashboards/province-dashboard-page/province-data-view/province-data-view.component';
import { ProvincePieChartComponent } from './pages/Dashboards/province-dashboard-page/province-pie-chart/province-pie-chart.component';
import { ProvinceImportInsideComponent } from './pages/Dashboards/province-dashboard-page/province-data-view/province-import-inside/province-import-inside.component';
import { ProvinceDashboardFilterComponent } from './pages/Dashboards/province-dashboard-page/province-dashboard-filter/province-dashboard-filter.component';
import { ProvinceBarChartComponent } from './pages/Dashboards/province-dashboard-page/province-bar-chart/province-bar-chart.component';
import { PortsInProvinceTableComponent } from './pages/Dashboards/province-dashboard-page/ports-in-province-table/ports-in-province-table.component';
import { AddCargoItemRowComponent } from './pages/admin-page/adding-items/add-loaded-transport/add-cargo-list/add-cargo-item-row/add-cargo-item-row.component';
import { AddCargoListComponent } from './pages/admin-page/adding-items/add-loaded-transport/add-cargo-list/add-cargo-list.component';
import { OverviewDatabaseItemsComponent } from './pages/admin-page/overview-database-items/overview-database-items.component';
import { AddPortPageComponent } from './pages/admin-page/adding-items/add-port-page/add-port-page.component';
import { ForbiddenErrorPageComponent } from './pages/error-pages/forbidden-error-page/forbidden-error-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'map', component: MappageComponent },
  { path: 'search', component : SearchPageComponent},
  { path: 'add-cargo-transport', component : AddCargoTransportPageComponent},
  { path: 'add-transport', component : AddLoadedTransportComponent},
  { path: 'add-port', component : AddPortPageComponent},
  { path: 'cargo-transport-of-port', component : CargoTransportOfPortPageComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: 'manage-database-items', component : OverviewDatabaseItemsComponent},
  { path: 'cargo-transport', component : SearchPageComponent},
  { path: 'contact', component : ContactPageComponent},
  { path: 'login', component : LoginPageComponent},
  { path: 'my-account', component : MyAccountPageComponent},
  { path: 'register', component : RegisterPageComponent},
  { path: 'port-dashboard', component: PortDashboardPageComponent},
  { path: 'province-dashboard', component: ProvinceDashboardPageComponent},
  { path: 'transport', component : TransportPageComponent},
  { path: 'server-error', component : InternalServerErrorPageComponent },
  { path: 'forbidden-error', component : ForbiddenErrorPageComponent},
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
    AddCargoTransportPageComponent,
    AdminPageComponent,
    ContactPageComponent,
    SearchInNavBarComponent,
    PortDashboardPageComponent,
    SingleDataComponent,
    TableComponent,
    GraphBarComponent,
    PieChartComponent,
    SingleDataCollectionComponent,
    CargotransportTableComponent,
    TransportOverviewComponent,
    CargoTableComponent,
    CargoPiechartComponent,
    AddLoadedTransportComponent,
    SearchResultListComponent,
    SearchResultComponent,
    SearchPageInputComponent,
    MapComponent,
    NavSearchResultListComponent,
    SearchResultPortComponent,
    DashboardFilterComponent,
    SmallSingleDataCollectionComponent,
    NavBarInputComponent,
    InternalServerErrorPageComponent,
    LoadingAnimationComponent,
    SearchFilterComponent,
    ProvinceDashboardPageComponent,
    ProvinceDataViewComponent,
    ProvincePieChartComponent,
    ProvinceImportInsideComponent,
    ProvinceDashboardFilterComponent,
    ProvinceBarChartComponent,
    PortsInProvinceTableComponent,
    AddCargoItemRowComponent,
    AddCargoListComponent,
    OverviewDatabaseItemsComponent,
    AddPortPageComponent,
    ForbiddenErrorPageComponent
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
