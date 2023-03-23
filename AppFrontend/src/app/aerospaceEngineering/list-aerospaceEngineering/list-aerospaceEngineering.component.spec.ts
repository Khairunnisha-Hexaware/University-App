import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { AerospaceEngineeringService } from "../aerospaceEngineering.service";
import { ListAerospaceEngineeringComponent } from "./list-aerospaceEngineering.component";
import { AerospaceEngineering } from "../aerospaceEngineering";

describe("ListAerospaceEngineeringComponent", () => {
  let mockpaginator: any;
  let mockdata: AerospaceEngineering[] = [];
  let mockAerospaceEngineeringService: any;
  let fixture: ComponentFixture<ListAerospaceEngineeringComponent>;
  let component: ListAerospaceEngineeringComponent;

  beforeEach(() => {
    mockdata = [
      {
        coursename: "coursename",
        coursedescription: "coursedescription",
        coursetype: "coursetype",
        duration: 24,
        coursefee: 52,
      },
    ];

    mockAerospaceEngineeringService = jasmine.createSpyObj([
      "getAerospaceEngineering",
      "deleteAerospaceEngineering",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListAerospaceEngineeringComponent],
      providers: [
        {
          provide: AerospaceEngineeringService,
          useValue: mockAerospaceEngineeringService,
        },
      ],
    });

    fixture = TestBed.createComponent(ListAerospaceEngineeringComponent);
    component = fixture.componentInstance;
  });

  it("should get all the AerospaceEngineerings", async () => {
    mockAerospaceEngineeringService.getAerospaceEngineering.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockAerospaceEngineeringService.deleteAerospaceEngineering.and.returnValue(
        of(true)
      );
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the AerospaceEngineering by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
