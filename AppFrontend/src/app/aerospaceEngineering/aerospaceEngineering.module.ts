import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddAerospaceEngineeringComponent } from "./add-aerospaceEngineering/add-aerospaceEngineering.component";
import { EditAerospaceEngineeringComponent } from "./edit-aerospaceEngineering/edit-aerospaceEngineering.component";
import { ListAerospaceEngineeringComponent } from "./list-aerospaceEngineering/list-aerospaceEngineering.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AerospaceEngineeringRoutes } from "./aerospaceEngineering.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AerospaceEngineeringRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddAerospaceEngineeringComponent,
    EditAerospaceEngineeringComponent,
    ListAerospaceEngineeringComponent,
  ],
})
export class AerospaceEngineeringModule {}
