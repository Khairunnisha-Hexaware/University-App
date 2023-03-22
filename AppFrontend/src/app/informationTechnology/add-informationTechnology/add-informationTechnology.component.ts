import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { InformationTechnologyService } from "../informationTechnology.service";

@Component({
  selector: "app-add-informationTechnology",
  templateUrl: "./add-informationTechnology.component.html",
  styleUrls: ["./add-informationTechnology.component.css"],
})
export class AddInformationTechnologyComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: InformationTechnologyService
  ) {}

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.form = this.fb.group({
      coursename: ["", [Validators.required]],
      coursedescription: ["", [Validators.required]],
      coursetype: ["", [Validators.required]],
      duration: ["", [Validators.required]],
      coursefee: ["", [Validators.required]],
    });
  }

  add() {
    if (this.form.valid) {
      this.service
        .addInformationTechnology(this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-informationTechnology/"]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
