import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
  }

}
