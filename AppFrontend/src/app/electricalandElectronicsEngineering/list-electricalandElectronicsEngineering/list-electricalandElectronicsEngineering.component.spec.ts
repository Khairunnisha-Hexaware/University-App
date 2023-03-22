import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { ElectricalandElectronicsEngineeringService } from "../electricalandElectronicsEngineering.service";
import { ListElectricalandElectronicsEngineeringComponent } from "./list-electricalandElectronicsEngineering.component";
import { ElectricalandElectronicsEngineering } from "../electricalandElectronicsEngineering";

describe("ListElectricalandElectronicsEngineeringComponent", () => {
  let mockpaginator: any;
  let mockdata: ElectricalandElectronicsEngineering[] = [];
  let mockElectricalandElectronicsEngineeringService: any;
  let fixture: ComponentFixture<ListElectricalandElectronicsEngineeringComponent>;
  let component: ListElectricalandElectronicsEngineeringComponent;

  beforeEach(() => {
    mockdata = [
      {
        coursename: "coursename",
        coursedescription: "coursedescription",
        coursetype: "coursetype",
        duration: 81,
        coursefee: 99,
      },
    ];

    mockElectricalandElectronicsEngineeringService = jasmine.createSpyObj([
      "getElectricalandElectronicsEngineering",
      "deleteElectricalandElectronicsEngineering",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListElectricalandElectronicsEngineeringComponent],
      providers: [
        {
          provide: ElectricalandElectronicsEngineeringService,
          useValue: mockElectricalandElectronicsEngineeringService,
        },
      ],
    });

    fixture = TestBed.createComponent(
      ListElectricalandElectronicsEngineeringComponent
    );
    component = fixture.componentInstance;
  });

  it("should get all the ElectricalandElectronicsEngineerings", async () => {
    mockElectricalandElectronicsEngineeringService.getElectricalandElectronicsEngineering.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockElectricalandElectronicsEngineeringService.deleteElectricalandElectronicsEngineering.and.returnValue(
        of(true)
      );
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the ElectricalandElectronicsEngineering by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
