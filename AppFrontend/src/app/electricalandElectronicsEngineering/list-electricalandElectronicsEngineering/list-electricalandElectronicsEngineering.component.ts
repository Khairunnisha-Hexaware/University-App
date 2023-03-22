import { Component, ViewChild, OnInit } from "@angular/core";
import { ElectricalandElectronicsEngineeringService } from "../electricalandElectronicsEngineering.service";
import { ElectricalandElectronicsEngineering } from "../electricalandElectronicsEngineering";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-electricalandElectronicsEngineering",
  templateUrl: "./list-electricalandElectronicsEngineering.component.html",
  styleUrls: ["./list-electricalandElectronicsEngineering.component.css"],
})
export class ListElectricalandElectronicsEngineeringComponent
  implements OnInit
{
  data: ElectricalandElectronicsEngineering[] = [];
  dataSource = new MatTableDataSource<ElectricalandElectronicsEngineering>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = [
    "coursename",
    "coursedescription",
    "coursetype",
    "duration",
    "coursefee",
    "action",
  ];

  constructor(public service: ElectricalandElectronicsEngineeringService) {}

  ngOnInit(): void {
    this.service
      .getElectricalandElectronicsEngineering()
      .subscribe((data: ElectricalandElectronicsEngineering[]) => {
        this.data = data;
        this.dataSource =
          new MatTableDataSource<ElectricalandElectronicsEngineering>(
            this.data
          );
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
      });
  }

  delete(index: number, id: number) {
    const data = this.dataSource.data;
    data.splice(this.paginator.pageIndex * this.paginator.pageSize + index, 1);
    this.dataSource.data = data;
    this.service.deleteElectricalandElectronicsEngineering(id).subscribe();
  }
}
