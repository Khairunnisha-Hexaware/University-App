import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AerospaceEngineering } from "../aerospaceEngineering";
import { AerospaceEngineeringService } from "../aerospaceEngineering.service";
import { EditAerospaceEngineeringComponent } from "./edit-aerospaceEngineering.component";

describe("EditAerospaceEngineeringComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: AerospaceEngineering;
  let mockAerospaceEngineeringService: any;
  let component: EditAerospaceEngineeringComponent;
  let fixture: ComponentFixture<EditAerospaceEngineeringComponent>;

  beforeEach(() => {
    mockdata = {
      coursename: "coursename",
      coursedescription: "coursedescription",
      coursetype: "coursetype",
      duration: 79,
      coursefee: 8,
    };

    mockAerospaceEngineeringService = jasmine.createSpyObj([
      "getAerospaceEngineeringById",
      "editAerospaceEngineering",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditAerospaceEngineeringComponent],
      providers: [
        FormBuilder,
        {
          provide: AerospaceEngineeringService,
          useValue: mockAerospaceEngineeringService,
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
    fixture = TestBed.createComponent(EditAerospaceEngineeringComponent);
    component = fixture.componentInstance;
  });

  it("should get the AerospaceEngineering by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockAerospaceEngineeringService.getAerospaceEngineeringById.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockAerospaceEngineeringService.getAerospaceEngineeringById.and.returnValue(
        of(mockdata)
      );
      mockAerospaceEngineeringService.editAerospaceEngineering.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should edit the AerospaceEngineering by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        coursename: "coursename",
        coursedescription: "coursedescription",
        coursetype: "coursetype",
        duration: 86,
        coursefee: 93,
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-aerospaceEngineering/",
      ]);
    });
  });
});
