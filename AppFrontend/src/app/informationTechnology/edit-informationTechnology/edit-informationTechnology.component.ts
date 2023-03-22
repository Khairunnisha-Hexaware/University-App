import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { InformationTechnology } from "../informationTechnology";
import { InformationTechnologyService } from "../informationTechnology.service";

@Component({
  selector: "app-edit-informationTechnology",
  templateUrl: "./edit-informationTechnology.component.html",
  styleUrls: ["./edit-informationTechnology.component.css"],
})
export class EditInformationTechnologyComponent implements OnInit {
  data!: InformationTechnology;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: InformationTechnologyService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service
      .getInformationTechnologyById(id)
      .subscribe((data: InformationTechnology) => {
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
        .editInformationTechnology(id, this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-informationTechnology/"]);
        });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
