import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AerospaceEngineeringService } from "../aerospaceEngineering.service";

@Component({
  selector: "app-add-aerospaceEngineering",
  templateUrl: "./add-aerospaceEngineering.component.html",
  styleUrls: ["./add-aerospaceEngineering.component.css"],
})
export class AddAerospaceEngineeringComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: AerospaceEngineeringService
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
      this.service.addAerospaceEngineering(this.form.value).subscribe((res) => {
        this._router.navigate(["/list-aerospaceEngineering/"]);
      });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
