import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AerospaceEngineeringService } from "../aerospaceEngineering.service";
import { AddAerospaceEngineeringComponent } from "./add-aerospaceEngineering.component";

describe("AddAerospaceEngineeringComponent", () => {
  let mockrouter: any;
  let mockAerospaceEngineeringService: any;
  let fixture: ComponentFixture<AddAerospaceEngineeringComponent>;
  let component: AddAerospaceEngineeringComponent;

  beforeEach(() => {
    mockAerospaceEngineeringService = jasmine.createSpyObj([
      "addAerospaceEngineering",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddAerospaceEngineeringComponent],
      providers: [
        FormBuilder,
        {
          provide: AerospaceEngineeringService,
          useValue: mockAerospaceEngineeringService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(AddAerospaceEngineeringComponent);
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockAerospaceEngineeringService.addAerospaceEngineering.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should add AerospaceEngineering and navigate to list AerospaceEngineering", () => {
      component.form.setValue({
        coursename: "coursename",
        coursedescription: "coursedescription",
        coursetype: "coursetype",
        duration: 43,
        coursefee: 31,
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-aerospaceEngineering/",
      ]);
    });
  });
});
