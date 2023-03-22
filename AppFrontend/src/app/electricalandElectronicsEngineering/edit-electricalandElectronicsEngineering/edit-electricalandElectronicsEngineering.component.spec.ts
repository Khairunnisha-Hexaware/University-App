import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { ElectricalandElectronicsEngineering } from "../electricalandElectronicsEngineering";
import { ElectricalandElectronicsEngineeringService } from "../electricalandElectronicsEngineering.service";
import { EditElectricalandElectronicsEngineeringComponent } from "./edit-electricalandElectronicsEngineering.component";

describe("EditElectricalandElectronicsEngineeringComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: ElectricalandElectronicsEngineering;
  let mockElectricalandElectronicsEngineeringService: any;
  let component: EditElectricalandElectronicsEngineeringComponent;
  let fixture: ComponentFixture<EditElectricalandElectronicsEngineeringComponent>;

  beforeEach(() => {
    mockdata = {
      coursename: "coursename",
      coursedescription: "coursedescription",
      coursetype: "coursetype",
      duration: 90,
      coursefee: 96,
    };

    mockElectricalandElectronicsEngineeringService = jasmine.createSpyObj([
      "getElectricalandElectronicsEngineeringById",
      "editElectricalandElectronicsEngineering",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditElectricalandElectronicsEngineeringComponent],
      providers: [
        FormBuilder,
        {
          provide: ElectricalandElectronicsEngineeringService,
          useValue: mockElectricalandElectronicsEngineeringService,
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
    fixture = TestBed.createComponent(
      EditElectricalandElectronicsEngineeringComponent
    );
    component = fixture.componentInstance;
  });

  it("should get the ElectricalandElectronicsEngineering by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockElectricalandElectronicsEngineeringService.getElectricalandElectronicsEngineeringById.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockElectricalandElectronicsEngineeringService.getElectricalandElectronicsEngineeringById.and.returnValue(
        of(mockdata)
      );
      mockElectricalandElectronicsEngineeringService.editElectricalandElectronicsEngineering.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should edit the ElectricalandElectronicsEngineering by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        coursename: "coursename",
        coursedescription: "coursedescription",
        coursetype: "coursetype",
        duration: 17,
        coursefee: 18,
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-electricalandElectronicsEngineering/",
      ]);
    });
  });
});
