import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CarnetCommande, ICarnetCommande } from '../model/carnet-commande.model';
import { Commande, ICommande } from '../model/commande.model';
import { IProduit } from '../model/produit.model';
import { CommandeService } from '../services/commande.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-ajout-commande',
  templateUrl: './ajout-commande.component.html',
  styleUrls: ['./ajout-commande.component.css']
})
export class AjoutCommandeComponent implements OnInit {

  commande : ICommande;
  carnetCommandeTemp: ICarnetCommande;
  produits: IProduit[];

  
  constructor(private commandeService: CommandeService, private produitService: ProduitService) { }

  ngOnInit(): void {
    this.commande = new Commande();
    this.carnetCommandeTemp = new CarnetCommande();
    this.commande.carnets = [];
    this.commande.prixTotal = 0;
    this.produitService.query().subscribe(data => {
      this.produits = data.body;
    }, error => {
      console.log(error);
    });
  }
  ajouterLigneCommande() {
    this.carnetCommandeTemp.prixTotal = this.carnetCommandeTemp.produit.prixUnitaire * this.carnetCommandeTemp.qte;
    this.commande.prixTotal = this.commande.prixTotal + this.carnetCommandeTemp.prixTotal;
    this.commande.date = moment();
    this.commande.carnets.push(this.carnetCommandeTemp);
    this.carnetCommandeTemp = new CarnetCommande();
  }
  affecterProduit(event) {
    this.carnetCommandeTemp.produit = event
  }
  passerLaCommande() {
    this.commandeService.create(this.commande).subscribe(data => {
      this.commande = data.body;
    }, error => {
    ;  console.log(error)
    })
  }
  

}
