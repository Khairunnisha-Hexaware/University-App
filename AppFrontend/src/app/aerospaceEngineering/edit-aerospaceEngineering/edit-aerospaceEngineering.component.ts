import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AerospaceEngineering } from "../aerospaceEngineering";
import { AerospaceEngineeringService } from "../aerospaceEngineering.service";

@Component({
  selector: "app-edit-aerospaceEngineering",
  templateUrl: "./edit-aerospaceEngineering.component.html",
  styleUrls: ["./edit-aerospaceEngineering.component.css"],
})
export class EditAerospaceEngineeringComponent implements OnInit {
  data!: AerospaceEngineering;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: AerospaceEngineeringService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service
      .getAerospaceEngineeringById(id)
      .subscribe((data: AerospaceEngineering) => {
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
        .editAerospaceEngineering(id, this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-aerospaceEngineering/"]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
