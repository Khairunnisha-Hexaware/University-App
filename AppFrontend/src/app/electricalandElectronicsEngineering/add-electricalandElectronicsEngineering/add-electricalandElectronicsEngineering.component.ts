import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ElectricalandElectronicsEngineeringService } from "../electricalandElectronicsEngineering.service";

@Component({
  selector: "app-add-electricalandElectronicsEngineering",
  templateUrl: "./add-electricalandElectronicsEngineering.component.html",
  styleUrls: ["./add-electricalandElectronicsEngineering.component.css"],
})
export class AddElectricalandElectronicsEngineeringComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: ElectricalandElectronicsEngineeringService
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
        .addElectricalandElectronicsEngineering(this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-electricalandElectronicsEngineering/"]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
