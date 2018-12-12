import { OnInit, Component } from "@angular/core";

export interface ClassInfo {
  name: string;
  position: number;
  image: string;
  preciod: string;
  precion: string;
  nivel: string;
}

const CLASSESCONST: ClassInfo[] = [
  {
    position: 1,
    name: "English",
    image: "/assets/Images/ingles.jpg",
    preciod: "2500",
    precion: "2000",
    nivel: "Elementary/High school/University"
  },
  {
    position: 2,
    name: "Mathematics",
    image: "/assets/Images/math.jpg",
    preciod: "3000",
    precion: "2500",
    nivel: "Elementary/High school"
  },
  {
    position: 3,
    name: "Programming",
    image: "/assets/Images/programming.jpg",
    preciod: "3500",
    precion: "3000",
    nivel: "High school/University"
  },
  {
    position: 4,
    name: "Office 365",
    image: "/assets/Images/office.png",
    preciod: "3500",
    precion: "3000",
    nivel: "High school/University"
  }
];

@Component({
  selector: "app-classes",
  templateUrl: "./classes.component.html",
  styleUrls: ["./classes.component.scss"]
})
export class ClassesComponent implements OnInit {
  interestedClasses: Set<ClassInfo>;
  dataSource = CLASSESCONST;
  displayedColumns = ["Name", "", "Classes at home", "Normal classes"];
  expandedElement: ClassInfo;

  onClickClass(e) {
    const obj = this.dataSource[e.srcElement.id - 1];
    !this.isInArray(obj)
      ? this.interestedClasses.add(obj)
      : this.appAlert(obj, "i");
  }

  onClickRemove(e) {
    const obj = this.dataSource[e.srcElement.id - 1];
    this.isInArray(obj)
      ? this.interestedClasses.delete(obj)
      : this.appAlert(obj, "r");
  }

  clear() {
    this.interestedClasses = new Set([]);
  }

  appAlert(obj, type) {
    if (type === "i") {
      // @ts-ignore
      bootbox.alert({
        message: obj.name + " has already been added.",
        className: "",
        backdrop: true,
        size: "small"
      });
    } else {
      // @ts-ignore
      bootbox.alert({
        message: "Error upon removal. Please refresh page",
        className: "bb-alternate-modal",
        backdrop: true,
        size: "smal"
      });
    }
  }
  isInArray(obj): Boolean {
    return this.interestedClasses.has(obj);
  }

  toggleModal() {
    document.getElementById("appModal").setAttribute("aria-hidden", "false");
  }

  constructor() {}
  ngOnInit() {
    this.interestedClasses = new Set([]);
  }
}
