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
  newItem =''
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
  // Aqui você pode atualizar no backend se quiser
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






}
