import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ElectricalandElectronicsEngineering } from "../electricalandElectronicsEngineering";
import { ElectricalandElectronicsEngineeringService } from "../electricalandElectronicsEngineering.service";

@Component({
  selector: "app-edit-electricalandElectronicsEngineering",
  templateUrl: "./edit-electricalandElectronicsEngineering.component.html",
  styleUrls: ["./edit-electricalandElectronicsEngineering.component.css"],
})
export class EditElectricalandElectronicsEngineeringComponent
  implements OnInit
{
  data!: ElectricalandElectronicsEngineering;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: ElectricalandElectronicsEngineeringService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service
      .getElectricalandElectronicsEngineeringById(id)
      .subscribe((data: ElectricalandElectronicsEngineering) => {
        this.data = data;
      });
    this.update();
  }

  update() {
    this.form = new FormGroup({
      coursename: new FormControl("", [Validators.required]),
      coursedescription: new FormControl("", [Validators.required]),
      coursetype: new FormControl("", [Validators.required]),
      duration: new FormControl("", [Validators.required]),
      coursefee: new FormControl("", [Validators.required]),
    });
  }

  edit() {
    if (this.form.valid) {
      var id = this.actRoute.snapshot.params["id"];
      this.service
        .editElectricalandElectronicsEngineering(id, this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-electricalandElectronicsEngineering/"]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
