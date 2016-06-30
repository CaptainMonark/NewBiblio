import {Injectable} from '@angular/core';

import {Livre} from '../components/Bibliotheque/Livre';

@Injectable()
export class biblioService{
    livres: Livre[] = [];
    
    getAllLivres(){
        return this.livres;
    }
    ajoutLivre(TitreLivre){
        this.livres.push(TitreLivre);
    }
}