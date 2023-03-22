import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { InformationTechnology } from "../informationTechnology";
import { InformationTechnologyService } from "../informationTechnology.service";
import { EditInformationTechnologyComponent } from "./edit-informationTechnology.component";

describe("EditInformationTechnologyComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: InformationTechnology;
  let mockInformationTechnologyService: any;
  let component: EditInformationTechnologyComponent;
  let fixture: ComponentFixture<EditInformationTechnologyComponent>;

  beforeEach(() => {
    mockdata = {
      coursename: "coursename",
      coursedescription: "coursedescription",
      coursetype: "coursetype",
      duration: 53,
      coursefee: 35,
    };

    mockInformationTechnologyService = jasmine.createSpyObj([
      "getInformationTechnologyById",
      "editInformationTechnology",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditInformationTechnologyComponent],
      providers: [
        FormBuilder,
        {
          provide: InformationTechnologyService,
          useValue: mockInformationTechnologyService,
        },
        {
          provide: ActivatedRoute,
          useValue: (mockActivatedRoute = {
            snapshot: { params: { id: "1" } },
          }),
        },
        { provide: Router, useValue: mockrouter },
      ],
    });
    fixture = TestBed.createComponent(EditInformationTechnologyComponent);
    component = fixture.componentInstance;
  });

  it("should get the InformationTechnology by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockInformationTechnologyService.getInformationTechnologyById.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockInformationTechnologyService.getInformationTechnologyById.and.returnValue(
        of(mockdata)
      );
      mockInformationTechnologyService.editInformationTechnology.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should edit the InformationTechnology by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        coursename: "coursename",
        coursedescription: "coursedescription",
        coursetype: "coursetype",
        duration: 80,
        coursefee: 31,
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-informationTechnology/",
      ]);
    });
  });
});
