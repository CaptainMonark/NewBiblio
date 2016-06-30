import {Component} from '@angular/core';
import {bibliotheque} from '../Bibliotheque/bibliotheque';

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html',
  directives: [bibliotheque]
})
export class Home {

  constructor() {}

  ngOnInit() {

  }

}
