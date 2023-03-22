import { Component, ViewChild, OnInit } from "@angular/core";
import { InformationTechnologyService } from "../informationTechnology.service";
import { InformationTechnology } from "../informationTechnology";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-informationTechnology",
  templateUrl: "./list-informationTechnology.component.html",
  styleUrls: ["./list-informationTechnology.component.css"],
})
export class ListInformationTechnologyComponent implements OnInit {
  data: InformationTechnology[] = [];
  dataSource = new MatTableDataSource<InformationTechnology>();
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

  constructor(public service: InformationTechnologyService) {}

  ngOnInit(): void {
    this.service
      .getInformationTechnology()
      .subscribe((data: InformationTechnology[]) => {
        this.data = data;
        this.dataSource = new MatTableDataSource<InformationTechnology>(
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
    this.service.deleteInformationTechnology(id).subscribe();
  }
}
