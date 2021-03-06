import { Component, OnInit } from '@angular/core';
import { ItemService } from "../item/item.service";

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  items = []

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.itemService.listar().subscribe(resp => {
      this.items = resp;
    })
  }

}
