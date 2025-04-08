import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common"
import { MainTemplate } from '../mainTemplate/mainTemplate.component';
import { GetInformations } from "../../services/serviceEvent/getInformations.service"
import { AddCollaborator } from "../../services/serviceCollaborators/addCollaborator.service"
import { FormsModule } from '@angular/forms';
import { response } from 'express';


@Component({
  selector: 'app-equipe',
  imports: [MainTemplate, CommonModule, FormsModule],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.scss'
})
export class EquipeComponent implements OnInit {

  names: any[] = []

  getEventsData: any[] = []



  constructor(
    private getInformations: GetInformations, 
    private collaboratorService: AddCollaborator
  ) {}


  ngOnInit() {
    this.startUnavaliable()
    this.startConfirmEvents()

  }


  startUnavaliable() {
    this.getInformations.getTeamNames().subscribe(
      (data) => {
        console.log("Informaçõe de data", data)
        this.names = data.findNameTeams.map((team: any) =>
          team.userName.split('.')[0],

        )
        console.log("Informaçõe de names", this.names)

      },

      (err) => {
        console.error("Erro ao obter nomes da equipe: ", err)
      }
    )
  }

  startConfirmEvents() {
    this.getInformations.getEvents().subscribe(
      (data) => {
        this.getEventsData = data.confirmedEvent.map(
          (event: { place: string; dateEvent: string; nameCouple: string, selectedTeams: string })=> ({
            place: event.place,
            selectedTeams: event.selectedTeams?.toString()?? "",
            dateEvent: new Date(event.dateEvent).toLocaleDateString('pt-BR'),
            nameCouple: event.nameCouple
          }))
      })
      return(
     console.log("Informaçõe de eventos", this.getEventsData)
      )
  }

  OpenWindowAddCollaborator = false
  OpenWindowRemoveCollaborator = false



  openRemoveCollaborator(){
    this.OpenWindowRemoveCollaborator = true
  }

    openWindowCollaborator(){
      this.OpenWindowAddCollaborator = true
    }
    closeWindowCollaborator(){
      this.OpenWindowAddCollaborator = false
      
    }
    closeRemoveCollaborator(){
      this.OpenWindowRemoveCollaborator = false

    }

    
    nameCollaborator: string = '';
    passwordCollaborator: string = ''
    functionCollaborator: string = '';

    
    saveCollaborator(){
      const userName= this.nameCollaborator + this.functionCollaborator
      const password = this.passwordCollaborator

      this.collaboratorService.createCollaborator(userName, password ).subscribe({
        next: (response)=>{
          console.log("Usuário criando com sucesso", response)
        },
        error:(error)=>{
          console.log("Erro ao criar usuário", error)

        }
        
      })
      
      console.log(userName, this.passwordCollaborator)
     

    }


}





