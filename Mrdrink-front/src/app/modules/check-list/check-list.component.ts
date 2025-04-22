import { Component, OnInit } from '@angular/core';

import { MainTemplate } from '../mainTemplate/mainTemplate.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GetInformations } from '../../services/serviceEvent/getInformations.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-check-list',
  imports: [MainTemplate, ReactiveFormsModule, CommonModule],
  templateUrl: './check-list.component.html',
  styleUrl: './check-list.component.scss'
})
export class CheckListComponent implements OnInit {

  constructor(
    private getInformations: GetInformations
  ){}

  ngOnInit() {
    this.buildMenu()
  }



   receivedNames: [] = []

  buildMenu() {
  this.getInformations.getEvents().subscribe((data) => {
    this.receivedNames = data.confirmedEvent.map(
      (names: { nameCouple: string }) => names.nameCouple
    );

    console.log("Os valores de receivedNames são", this.receivedNames);
  });
}


}
