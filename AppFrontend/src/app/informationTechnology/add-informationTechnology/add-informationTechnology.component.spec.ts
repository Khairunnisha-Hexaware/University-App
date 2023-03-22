import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { InformationTechnologyService } from "../informationTechnology.service";
import { AddInformationTechnologyComponent } from "./add-informationTechnology.component";

describe("AddInformationTechnologyComponent", () => {
  let mockrouter: any;
  let mockInformationTechnologyService: any;
  let fixture: ComponentFixture<AddInformationTechnologyComponent>;
  let component: AddInformationTechnologyComponent;

  beforeEach(() => {
    mockInformationTechnologyService = jasmine.createSpyObj([
      "addInformationTechnology",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddInformationTechnologyComponent],
      providers: [
        FormBuilder,
        {
          provide: InformationTechnologyService,
          useValue: mockInformationTechnologyService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(AddInformationTechnologyComponent);
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockInformationTechnologyService.addInformationTechnology.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should add InformationTechnology and navigate to list InformationTechnology", () => {
      component.form.setValue({
        coursename: "coursename",
        coursedescription: "coursedescription",
        coursetype: "coursetype",
        duration: 78,
        coursefee: 64,
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-informationTechnology/",
      ]);
    });
  });
});
