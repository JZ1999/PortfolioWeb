import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class DataCurriculumService {
  private images = [
    {
      url: "../assets/Images/Certificates/angular.png",
      name: "Front-End Javascript Frameworks: Angular",
      type: "JS framework",
      logo: "js",
      desc:
        "Working in front-end with Angular 6. Animations, services, Http, RxJs",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/mongoDB.png",
      name: "MongoDB Essentials",
      type: "NoSQL DBMS",
      logo: "mongodb",
      desc:
        "I can make secure and efficient databases with the most popular NoSQL DBMS",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/c++.jpeg",
      name: "C++ Tutorial Course",
      type: "Programming language",
      logo: "c++",
      desc: "Usage of C++ and a variaty of its tools to offer",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/chatbot.png",
      name: "Complete Facebook Messenger Chatbot Course",
      type: "Chatbot",
      logo: "chatbot",
      desc:
        "Using Chatteron's chatbots to enhance interactibility in messenger and websites",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/bootstrap.png",
      name: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      type: "CSS/JS framework",
      logo: "css",
      desc: "A css and js library used for making the UI with ease",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/cs.jpg",
      name: "C# Tutorial Course",
      type: "Programming language",
      logo: "cs",
      desc: "Using C# to make windows based software",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/frontendUNED.png",
      name: "Uso de Front-End en Applicaciones web",
      type: "Front-End",
      logo: "front-end",
      desc: "Use of front end in web applications",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/habilidadesBlandas.png",
      name: "Habilidades Blandas para la Administración de Proyectos",
      type: "Soft skills",
      logo: "Habilidades",
      desc: "Developing soft skills relevant towards project administration",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/python3.jpeg",
      name: "Python3 Tutorial Course",
      type: "Programming language",
      logo: "python",
      desc: "Scripting with python, advanced usage from web-scrapers to GUIs",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/gj_2017.png",
      name: "Game Jam CIDEV 2017",
      type: "Videogame development",
      logo: "gamejam",
      desc:
        "A Game Jam made by CIDEV, consisting of making a videogame in under 48 hours",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/css.jpg",
      name: "Css Tutorial Course",
      type: "Styling language",
      logo: "CSS",
      desc: "CSS used to its full advantage to style websites",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/intro_QA.jpg",
      name: "Introduction to Software Testing or Software QA",
      type: "QA",
      logo: "QA",
      desc: "Developing skills to be able to work in QA",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/html.jpeg",
      name: "HTML Tutorial Course",
      type: "Markup language",
      logo: "HTML",
      desc: "Using html with all of its features to make websites",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/java.jpeg",
      name: "Java Tutorial Course",
      type: "Programming language",
      logo: "java",
      desc: "Using java to make graphical user interfaces",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/javascript.jpg",
      name: "Javascript Tutorial Course",
      type: "Programming language",
      logo: "javascript",
      desc: "Using javascript to make interactive websites",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/sql.jpg",
      name: "SQL Tutorial Course",
      type: "Query language",
      logo: "SQL",
      desc: "Managing SQL to use DBMS to make use of databases",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/php.jpeg",
      name: "PHP Tutorial Course",
      type: "Programming language",
      logo: "PHP",
      desc: "Great use of PHP to make dynamic websites and develop backend",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/jquery.jpg",
      name: "Jquery Tutorial Course",
      type: "Javascript library",
      logo: "jquery",
      desc:
        "Jquery and its tools are available to my skillset to improve javascript",
      likes: 0
    },
    {
      url: "../assets/Images/Certificates/c.jpeg",
      name: "C Tutorial Course",
      type: "Programming language",
      logo: "c",
      desc: "I have great use of the C language to develop efficient programs",
      likes: 0
    }
  ];

  constructor() {}

  public getImages() {
    return this.images;
  }
}
