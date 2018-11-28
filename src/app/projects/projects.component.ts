import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  private isMobile: boolean;
  constructor() {}

  ngOnInit() {
    if (window.innerWidth <= 800 && window.innerHeight <= 700) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    console.log(window.innerWidth <= 800 && window.innerHeight <= 700);

    try {
      if (!this.isMobile) {
        let obj = document.getElementsByClassName("image") as HTMLCollectionOf<
          HTMLElement
        >;
        for (let i = 0; i < obj.length; i++) {
          obj[i].style.webkitFilter = "grayscale(100%)";
        }
      }
    } catch (e) {}
  }

  public hoverIMG(element) {
    let Img = element.srcElement.children[0];
    try {
      if (Img.localName == "img" && !this.isMobile) {
        Img.style.webkitFilter = "grayscale(0%)";
      }
    } catch (e) {}
  }
  public hoverIMGoff(element) {
    let Img = element.srcElement.children[0];
    try {
      if (Img.localName == "img" && !this.isMobile) {
        Img.style.webkitFilter = "grayscale(100%)";
      }
    } catch (e) {}
  }
}
