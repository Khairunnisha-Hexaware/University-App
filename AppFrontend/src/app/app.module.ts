
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { AddElectricalandElectronicsEngineeringComponent } from "./electricalandElectronicsEngineering/add-electricalandElectronicsEngineering/add-electricalandElectronicsEngineering.component";
import { EditElectricalandElectronicsEngineeringComponent } from "./electricalandElectronicsEngineering/edit-electricalandElectronicsEngineering/edit-electricalandElectronicsEngineering.component";
import { ListElectricalandElectronicsEngineeringComponent } from "./electricalandElectronicsEngineering/list-electricalandElectronicsEngineering/list-electricalandElectronicsEngineering.component";
import { AddInformationTechnologyComponent } from "./informationTechnology/add-informationTechnology/add-informationTechnology.component";
import { EditInformationTechnologyComponent } from "./informationTechnology/edit-informationTechnology/edit-informationTechnology.component";
import { ListInformationTechnologyComponent } from "./informationTechnology/list-informationTechnology/list-informationTechnology.component";

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
        AddElectricalandElectronicsEngineeringComponent,
        EditElectricalandElectronicsEngineeringComponent,
        ListElectricalandElectronicsEngineeringComponent,
        AddInformationTechnologyComponent,
        EditInformationTechnologyComponent,
        ListInformationTechnologyComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
