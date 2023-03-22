import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddInformationTechnologyComponent } from "./add-informationTechnology/add-informationTechnology.component";
import { EditInformationTechnologyComponent } from "./edit-informationTechnology/edit-informationTechnology.component";
import { ListInformationTechnologyComponent } from "./list-informationTechnology/list-informationTechnology.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InformationTechnologyRoutes } from "./informationTechnology.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(InformationTechnologyRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddInformationTechnologyComponent,
    EditInformationTechnologyComponent,
    ListInformationTechnologyComponent,
  ],
})
export class InformationTechnologyModule {}
