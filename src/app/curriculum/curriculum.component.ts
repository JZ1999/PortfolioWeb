import { Component, OnInit } from "@angular/core";
import { DataCurriculumService } from "../data-curriculum.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-curriculum",
  templateUrl: "./curriculum.component.html",
  styleUrls: ["./curriculum.component.scss"]
})
export class CurriculumComponent implements OnInit {
  public certificates;
  public certificates_aux; //Always has all certificates
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private data: DataCurriculumService) {}

  ngOnInit() {
    this.certificates = this.data.getImages();
    this.certificates_aux = this.certificates.slice(0);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
    for (let i = 0; i < this.certificates.length; i++) {
      this.options.push(this.certificates[i].name);
    }
  }

  private comp(reg, string) {
    return string.toLowerCase().match(reg) != null;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      this.comp(this.escapeRegExp(filterValue), option)
    );
  }

  private escapeRegExp(string) {
    return new RegExp(string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  }

  search(e) {
    if (e.type == "keyup") {
      let regex = this.escapeRegExp(e.srcElement.value);
      for (let elem of this.certificates_aux) {
        if (
          elem.name.match(regex) == null &&
          this.certificates.includes(elem)
        ) {
          this.certificates.splice(this.certificates.indexOf(elem), 1);
        } else if (
          elem.name.match(regex) != null &&
          !this.certificates.includes(elem)
        ) {
          this.certificates.push(elem);
        }
      }
    } else if (e.type == "click") {
      console.log();
      // @ts-ignore
      let regex = this.escapeRegExp(document.getElementById("search").value);
      for (let elem of this.certificates_aux) {
        if (
          elem.name.match(regex) == null &&
          this.certificates.includes(elem)
        ) {
          this.certificates.splice(this.certificates.indexOf(elem), 1);
        } else if (
          elem.name.match(regex) != null &&
          !this.certificates.includes(elem)
        ) {
          this.certificates.push(elem);
        }
      }
    }
  }

  putLike(e) {
    if (this.certificates.length > 0) {
      for (let x = 0; x < this.certificates.length; x++) {
        if (e.srcElement.id === this.certificates[x].logo) {
          this.certificates[x].likes++;
        }
      }
    }
  }
}
