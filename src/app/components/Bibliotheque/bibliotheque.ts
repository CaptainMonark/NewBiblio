import {Component} from '@angular/core';

@Component({
  selector: 'bibliotheque',
  styleUrls: ['./bibliotheque.css'],
  templateUrl: './bibliotheque.html'
})
export class bibliotheque {
  mesLivres = ['Le seigneur des anneaux', 'Batman','Jeremy le nain'];
  addLivre(TitreLivre){
    this.mesLivres.push(TitreLivre);
  }
}
