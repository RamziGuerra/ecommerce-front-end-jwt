import { Component, OnInit } from '@angular/core';
import { IProduit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  produit: IProduit;
  constructor(private produitService: ProduitService, private categorieService: CategorieService) { }

  ngOnInit(): void {
  }

  annuler(): void {
  }
  ajouterProduit(): void {
  }

}
