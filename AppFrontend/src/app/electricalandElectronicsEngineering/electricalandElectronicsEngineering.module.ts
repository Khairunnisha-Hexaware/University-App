import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddElectricalandElectronicsEngineeringComponent } from "./add-electricalandElectronicsEngineering/add-electricalandElectronicsEngineering.component";
import { EditElectricalandElectronicsEngineeringComponent } from "./edit-electricalandElectronicsEngineering/edit-electricalandElectronicsEngineering.component";
import { ListElectricalandElectronicsEngineeringComponent } from "./list-electricalandElectronicsEngineering/list-electricalandElectronicsEngineering.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ElectricalandElectronicsEngineeringRoutes } from "./electricalandElectronicsEngineering.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ElectricalandElectronicsEngineeringRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddElectricalandElectronicsEngineeringComponent,
    EditElectricalandElectronicsEngineeringComponent,
    ListElectricalandElectronicsEngineeringComponent,
  ],
})
export class ElectricalandElectronicsEngineeringModule {}
