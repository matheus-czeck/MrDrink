import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common"
import { MainTemplate } from '../mainTemplate/mainTemplate.component';
import { GetInformations } from "../../services/serviceEvent/getInformations.service"


@Component({
  selector: 'app-equipe',
  imports: [MainTemplate, CommonModule],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.scss'
})
export class EquipeComponent implements OnInit {

  names: any[] = []

  constructor(private getInformations: GetInformations,){}


  ngOnInit() {
    this.getInformations.getTeamNames().subscribe(
       (data)=>{
        console.log("Informaçõe de data", data)
        this.names = data.findNameTeams.map((team: any)=>
         team.userName.split('.')[0],
  
        )
        console.log("Informaçõe de names", this.names)
        
      },
    
   ( err)=>{
      console.error("Erro ao obter nomes da equipe: ", err)
    }
    )
  }
  
 

}
