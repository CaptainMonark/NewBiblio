import {Component} from '@angular/core';
import {biblioService} from '../../services/bibliotequeService';

@Component({
  selector: 'bibliotheque',
  styleUrls: ['./bibliotheque.css'],
  templateUrl: './bibliotheque.html',
  providers:[biblioService]
})
export class bibliotheque {
  biblioService: biblioService;
  mesLivres: string[];
  constructor(biblioService: biblioService){
    this.biblioService = biblioService;
    this.mesLivres = biblioService.getAllLivres();
  }
  ajoutLivre(TitreLivre){
    this.biblioService.ajoutLivre(TitreLivre);
  }

}
