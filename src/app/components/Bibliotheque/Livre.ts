export class Livre {
    Titre: string;
    Auteur: string[];
    Dessinateur: string[];
    Editeur: string;
    Année: number;

    constructor(titre:string = '',auteur: string[],dessinateur: string[],editeur: string,année: number){
        this.Titre = titre;
        this.Auteur = auteur;
        this.Dessinateur = dessinateur;
        this.Editeur = editeur;
        this.Année = année;
    }
}
