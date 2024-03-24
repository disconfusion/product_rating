import { Component } from '@angular/core';
import { PRODUCTS } from '../data/PRODUCTS';
import { Prodotto } from '../models/prodotto';


@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrl: './prodotti.component.css'
})
export class ProdottiComponent {
  listaProdotti: Prodotto[] = PRODUCTS;
}
