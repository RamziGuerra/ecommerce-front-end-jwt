import { Component, OnInit } from '@angular/core';
import { IProduit, Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { CategorieService } from '../services/categorie.service';
import { ICategorie } from '../model/categorie.model';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  categories: ICategorie[];
  produit: IProduit;
  constructor(private produitService: ProduitService, private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.produit = new Produit();
    this.categorieService.query().subscribe(data => {
      this.categories = data.body;
    }, error => {
      console.log(error);
    })
  }

  annuler(): void {
  }
  ajouterProduit(): void {
    this.produitService.create(this.produit).subscribe(data => {
      this.produit = data.body;
    }, error => {
      console.log(error);
    })
  }
  affecterCategorie(event: any) {
    this.produit.categorie = event;
  }

}
