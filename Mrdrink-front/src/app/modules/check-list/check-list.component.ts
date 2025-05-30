import { Component, OnInit } from '@angular/core';

import { MainTemplate } from '../mainTemplate/mainTemplate.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GetInformations } from '../../services/serviceEvent/getInformations.service';
import { CommonModule } from '@angular/common';
import { Menus } from './menus.component';


@Component({
  selector: 'app-check-list',
  standalone: true,
  imports: [MainTemplate, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './check-list.component.html',
  styleUrl: './check-list.component.scss'
})
export class CheckListComponent implements OnInit {

  constructor(
    private getInformations: GetInformations,
    private menus: Menus
  ) { }

  ngOnInit() {
    this.buildMenu()
    this.generateChecklist()
  }



  receivedNames: [] = []


  menuMapByCouple: { [key: string]: string } = {}
  buildMenu() {
    this.getInformations.getEvents().subscribe((data) => {
      this.receivedNames = data.confirmedEvent.map(
        (names: { nameCouple: string }) => names.nameCouple

      );
      data.confirmedEvent.forEach((item: { nameCouple: string, menu: string }) => {
        this.menuMapByCouple[item.nameCouple] = item.menu;

      });

      console.log("Casais:", this.receivedNames);
      console.log("Mapeamento casal-menu:", this.menuMapByCouple);
    });
  }

  selectedCouple = ""
  selectedMenuItems: string[] = []
  newItem = ''
  nameMenu: string = ""
  selectedInvestimentoItems: string[] = []

  isEditing = false

  addItem() {
    const item = this.newItem.trim();
    if (item && !this.selectedMenuItems.includes(item)) {
      this.selectedMenuItems.push(item);
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.selectedMenuItems.splice(index, 1);
  }

  saveMenuChanges() {
    this.isEditing = false;
    console.log('Novo cardápio salvo:', this.selectedMenuItems);

  }

  onCoupleChange() {

    const completMenu = this.menuMapByCouple[this.selectedCouple]?.toLowerCase() || "";

    const isGold = completMenu.includes("gold");


    let menuKey = "";
    if (completMenu.includes("clássico")) menuKey = "classico";
    else if (completMenu.includes("especial")) menuKey = "especial";
    else if (completMenu.includes("premium") && isGold) menuKey = "premiumGold";
    else if (completMenu.includes("premium")) menuKey = "premium";

    const contentMenu = this.menus.menu[menuKey];

    this.nameMenu = completMenu


    const investimentoKey = completMenu.includes("master") ? "master"
      : completMenu.includes("medio") ? "medio"
        : "";

    const conteudoInvestimento = this.menus.investimento[investimentoKey];

    console.log("nome no H3:", this.nameMenu);
    console.log("Casal selecionado:", this.selectedCouple);
    console.log("Menu completo (bruto):", completMenu);
    console.log("Tipo de menu:", menuKey);
    console.log("Itens do menu:", contentMenu);
    console.log("Tipo de investimento:", investimentoKey);
    console.log("Itens do investimento:", conteudoInvestimento);

    this.selectedMenuItems = contentMenu ?? [];
    this.selectedInvestimentoItems = conteudoInvestimento ?? [];



  }

  checkListItems: string[] = []
  bebidasListItems: string[] = []
  frutasListItems: string[] = []
  quantidadeItems: number = 0

  editando = false

  quantidades: {
    utensilios: number;
    bebidas: number;
    frutas: number;
  } = {
      utensilios: 1,
      bebidas: 1,
      frutas: 1
    };



  generateChecklist() {
    this.checkListItems = this.menus.checkList["utensilios"] ?? [];
    this.bebidasListItems = this.menus.checkList["bebidas"] ?? [];
    this.frutasListItems = this.menus.checkList["frutas"] ?? [];
  }

  toggleEditar() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      console.log("Checklist final:");
      console.log("Utensílios:", this.checkListItems, this.quantidades.utensilios);
      console.log("Frutas:", this.frutasListItems, this.quantidades.frutas);
      console.log("Bebidas:", this.bebidasListItems, this.quantidades.bebidas);
    }
  }

  newUtensilItem = ''
  newFruitsItem = ''
  newDrinkstItem = ''

  addChecklist() {
    if (this.newUtensilItem.trim()) {
      const item = this.newUtensilItem.trim();
      if (!this.checkListItems.includes(item)) {
        this.checkListItems.push(item);
        this.newUtensilItem = '';
      }
    }

    if (this.newFruitsItem.trim()) {
      const item = this.newFruitsItem.trim();
      if (!this.frutasListItems.includes(item)) {
        this.frutasListItems.push(item);
        this.newFruitsItem = '';
      }
    }

    if (this.newDrinkstItem.trim()) {
      const item = this.newDrinkstItem.trim();
      if (!this.bebidasListItems.includes(item)) {
        this.bebidasListItems.push(item);
        this.newDrinkstItem = '';
      }
    }
  }

  removeUtensilItem(index: number) {
  this.checkListItems.splice(index, 1);
}

removeFruitItem(index: number) {
  this.frutasListItems.splice(index, 1);
}

removeDrinkItem(index: number) {
  this.bebidasListItems.splice(index, 1);
}

  saveChecklistChanges() {
    this.isEditing = false;
    console.log("Novo checklist salvo:", this.checkListItems, this.frutasListItems, this.bebidasListItems);
  }





}
