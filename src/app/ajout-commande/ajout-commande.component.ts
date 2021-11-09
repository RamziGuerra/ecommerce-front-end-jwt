import { Component, OnInit } from '@angular/core';
import { CarnetCommande, ICarnetCommande } from '../model/carnet-commande.model';
import { Commande, ICommande } from '../model/commande.model';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-ajout-commande',
  templateUrl: './ajout-commande.component.html',
  styleUrls: ['./ajout-commande.component.css']
})
export class AjoutCommandeComponent implements OnInit {

  commande : ICommande;
  carnetCommandeTemp: ICarnetCommande;

  
  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commande = new Commande();
    this.commande.numero = (Math.random() * 100).toString();
    this.carnetCommandeTemp = new CarnetCommande();
    this.commande.carnets = [];
  }
  ajouterLigneCommande() {   
    this.commande.carnets.push(this.carnetCommandeTemp);
    this.carnetCommandeTemp = new CarnetCommande();
  }

  passerLaCommande() {
    
  }
  

}
