import { Component, OnInit } from '@angular/core';
import {DataCurriculumService} from '../data-curriculum.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  public certificates;


  constructor(private data: DataCurriculumService) { }

  ngOnInit() {
      this.certificates = this.data.getImages();
  }

  putLike(e) {
      if (this.certificates.length > 0) {
          for ( let x = 0; x < this.certificates.length; x++) {
            if (e.srcElement.id === this.certificates[x].logo ) {
                this.certificates[x].likes++;
            }
          }
        }
  }
}
