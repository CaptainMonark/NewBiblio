//Les imports
import {Component} from '@angular/core';
import {biblioService} from '../../services/bibliotequeService';
import {OnInit} from '@angular/core';
import {Livre} from './Livre';

@Component({
  selector: 'bibliotheque', //Son 'nom'
  styleUrls: ['./bibliotheque.css'], //Sa feuille de style
  templateUrl: './bibliotheque.html', //Sa page html
  providers:[biblioService] //Son service
})

export class bibliotheque implements OnInit {
  //Déclaration de variables
  biblioService: biblioService;
  mesLivres: Livre[];
  nbLivre: number;

  constructor(biblioService: biblioService){ //Constructeur
    this.biblioService = biblioService;
    
  }
  
  ajoutLivre(TitreLivre){ // Ajouter un livre dans la bibliotheque
    this.biblioService.ajoutLivre(TitreLivre); //Chope le titre
    this.nbLivre = this.mesLivres.length; //Et sa taille a chaque click
  }

  ngOnInit(){ //A l'initialisation
    this.mesLivres = this.biblioService.getAllLivres(); //Recupère tout les livres
    this.nbLivre = this.mesLivres.length; //Recupère le nombre de livre
  }

}
