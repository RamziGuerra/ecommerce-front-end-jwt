import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-commande',
  templateUrl: './ajout-commande.component.html',
  styleUrls: ['./ajout-commande.component.css']
})
export class AjoutCommandeComponent implements OnInit {

  lignesCommande = [];
  ligneCommandeTemp;
  commande: any
  constructor() { }

  ngOnInit(): void {
  }
  ajouterLigneCommande() {
    this.lignesCommande.push(this.ligneCommandeTemp);
   //  this.ligneCommandeTemp = null;
  }
  

}
