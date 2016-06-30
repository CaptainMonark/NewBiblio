import {Injectable} from '@angular/core';

@Injectable()
export class biblioService{
    livres: string[];

    getAllLivres(){
        this.livres = [];
        return this.livres;
    }
    ajoutLivre(TitreLivre){
        this.livres.push(TitreLivre);
    }
}