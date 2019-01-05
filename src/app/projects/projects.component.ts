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
    this.isMobile = window.innerWidth <= 800 && window.innerHeight <= 700;
    this.changeAllIMGToGray();
  }

  private changeAllIMGToGray() {
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
    if (element.srcElement.localName != "li") {
      element = element.srcElement.parentNode;
      if (element.localName != "li") {
        element = element.parentNode.parentNode;
      }
      var Img = element.children[0];
    } else {
      Img = element.srcElement.children[0];
    }
    this.changeGrayScale(0, Img);
  }

  public hoverIMGoff(element) {
    if (element.srcElement.localName != "li") {
      element = element.srcElement.parentNode.parentNode;
      if (element.localName != "li") {
        element = element.parentNode;
      }
      var Img = element.children[0];
    } else {
      Img = element.srcElement.children[0];
    }
    this.changeGrayScale(100, Img);
  }
  private changeGrayScale(amount: number, Img: HTMLElement) {
    try {
      if (Img.localName == "img" && !this.isMobile) {
        Img.style.webkitFilter = "grayscale(" + amount + "%)";
      }
    } catch (e) {}
  }
}
