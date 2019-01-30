import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  pdfSrc: string = "assets/PDF/CV.pdf";
  constructor() {}

  ngOnInit() {
    document.getElementById("about").classList.add("d-none");
  }

  about() {
    console.log("CV");
    let _cv = document.getElementById("CV");
    _cv.classList.add("d-none");
    let _about = document.getElementById("about");
    _about.classList.remove("d-none");
  }
  cv() {
    let _cv = document.getElementById("CV");
    _cv.classList.remove("d-none");
    let _about = document.getElementById("about");
    _about.classList.add("d-none");
  }
}
