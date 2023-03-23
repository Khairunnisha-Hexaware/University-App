import { Component, ViewChild, OnInit } from "@angular/core";
import { AerospaceEngineeringService } from "../aerospaceEngineering.service";
import { AerospaceEngineering } from "../aerospaceEngineering";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-aerospaceEngineering",
  templateUrl: "./list-aerospaceEngineering.component.html",
  styleUrls: ["./list-aerospaceEngineering.component.css"],
})
export class ListAerospaceEngineeringComponent implements OnInit {
  data: AerospaceEngineering[] = [];
  dataSource = new MatTableDataSource<AerospaceEngineering>();
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

  constructor(public service: AerospaceEngineeringService) {}

  ngOnInit(): void {
    this.service
      .getAerospaceEngineering()
      .subscribe((data: AerospaceEngineering[]) => {
        this.data = data;
        this.dataSource = new MatTableDataSource<AerospaceEngineering>(
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
    this.service.deleteAerospaceEngineering(id).subscribe();
  }
}
