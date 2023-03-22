import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { InformationTechnologyService } from "../informationTechnology.service";
import { ListInformationTechnologyComponent } from "./list-informationTechnology.component";
import { InformationTechnology } from "../informationTechnology";

describe("ListInformationTechnologyComponent", () => {
  let mockpaginator: any;
  let mockdata: InformationTechnology[] = [];
  let mockInformationTechnologyService: any;
  let fixture: ComponentFixture<ListInformationTechnologyComponent>;
  let component: ListInformationTechnologyComponent;

  beforeEach(() => {
    mockdata = [
      {
        coursename: "coursename",
        coursedescription: "coursedescription",
        coursetype: "coursetype",
        duration: 28,
        coursefee: 18,
      },
    ];

    mockInformationTechnologyService = jasmine.createSpyObj([
      "getInformationTechnology",
      "deleteInformationTechnology",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListInformationTechnologyComponent],
      providers: [
        {
          provide: InformationTechnologyService,
          useValue: mockInformationTechnologyService,
        },
      ],
    });

    fixture = TestBed.createComponent(ListInformationTechnologyComponent);
    component = fixture.componentInstance;
  });

  it("should get all the InformationTechnologys", async () => {
    mockInformationTechnologyService.getInformationTechnology.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockInformationTechnologyService.deleteInformationTechnology.and.returnValue(
        of(true)
      );
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the InformationTechnology by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
