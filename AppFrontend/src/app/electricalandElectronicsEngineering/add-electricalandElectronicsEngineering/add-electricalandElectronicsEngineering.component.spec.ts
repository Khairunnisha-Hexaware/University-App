import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { ElectricalandElectronicsEngineeringService } from "../electricalandElectronicsEngineering.service";
import { AddElectricalandElectronicsEngineeringComponent } from "./add-electricalandElectronicsEngineering.component";

describe("AddElectricalandElectronicsEngineeringComponent", () => {
  let mockrouter: any;
  let mockElectricalandElectronicsEngineeringService: any;
  let fixture: ComponentFixture<AddElectricalandElectronicsEngineeringComponent>;
  let component: AddElectricalandElectronicsEngineeringComponent;

  beforeEach(() => {
    mockElectricalandElectronicsEngineeringService = jasmine.createSpyObj([
      "addElectricalandElectronicsEngineering",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddElectricalandElectronicsEngineeringComponent],
      providers: [
        FormBuilder,
        {
          provide: ElectricalandElectronicsEngineeringService,
          useValue: mockElectricalandElectronicsEngineeringService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(
      AddElectricalandElectronicsEngineeringComponent
    );
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockElectricalandElectronicsEngineeringService.addElectricalandElectronicsEngineering.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should add ElectricalandElectronicsEngineering and navigate to list ElectricalandElectronicsEngineering", () => {
      component.form.setValue({
        coursename: "coursename",
        coursedescription: "coursedescription",
        coursetype: "coursetype",
        duration: 9,
        coursefee: 97,
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-electricalandElectronicsEngineering/",
      ]);
    });
  });
});
