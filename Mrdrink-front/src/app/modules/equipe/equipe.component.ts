import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common"
import { MainTemplate } from '../mainTemplate/mainTemplate.component';
import { GetInformations } from "../../services/serviceEvent/getInformations.service"
import { AddCollaborator } from "../../services/serviceCollaborators/addCollaborator.service"
import { FormsModule } from '@angular/forms';
import { SharedTeams } from '../../services/serviceCollaborators/SharedTeams.service';
import { deleteCollaborator } from '../../services/serviceCollaborators/DeleteCollaborator.service';
import { NzMessageService} from 'ng-zorro-antd/message'

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
    private collaboratorService: AddCollaborator,
    private  sheredTeams: SharedTeams,
    private DeleteCollaborator:deleteCollaborator,
    private message: NzMessageService
    
  ) {}


  ngOnInit() {
    this.startUnavaliable()
    this.startConfirmEvents()
    this.searchingTeam()

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
    


    teamList: any[]=[]
    selectedCollaborator: string = ''

    removeCollaborator(){
      if (!this.selectedCollaborator) return;

      this.DeleteCollaborator.removeCollaborator(this.selectedCollaborator).subscribe({

        next: ()=>{
          console.log("Colaborador removido com sucesso!");
          this.message.success("Colaborador removido com sucesso!")
          this.searchingTeam();
          this.selectedCollaborator = "";

        }, 
        error: (err)=>{
          this.message.error("Erro ao remover colaborador. Tente novamente")
          console.log("Erro ao remover colaborador:", err)

        }
      })
    }

    searchingTeam(){
      this.sheredTeams.getTeamList().subscribe({
        next: (teams)=>{
          this.teamList = teams
          console.log("equipes recebidas", this.teamList)

        },error:(err)=>{

          console.error("Erro ao carregar equipe", err)
        }
      })
     

    }
  
    

    
    nameCollaborator: string = '';
    passwordCollaborator: string = ''
    functionCollaborator: string = '';

    
    saveCollaborator(){
      const userName= this.nameCollaborator + this.functionCollaborator
      const password = this.passwordCollaborator

      this.collaboratorService.createCollaborator(userName, password ).subscribe({
        next: (response)=>{
          this.message.success("Colaborador criado com sucesso!")
        },
        error:(error)=>{
          console.log("Erro ao criar usuário", error)
          this.message.error("Erro ao implementar colaborador, tente novamente")

        }
        
      })
      
      console.log(userName, this.passwordCollaborator)
     

    }


}





