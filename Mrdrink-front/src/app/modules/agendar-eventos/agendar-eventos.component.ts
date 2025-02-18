import { Component } from '@angular/core';
import { MainTemplate } from "../mainTemplate/mainTemplate.component";
import { MatDatepickerModule } from '@angular/material/datepicker'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import { EventService } from '../../services/serviceSchedule/event.service';
import { response } from 'express';


@Component({
  selector: 'app-agendar-eventos',
  imports: [MainTemplate, MatDatepickerModule, CommonModule, ReactiveFormsModule],
  templateUrl: './agendar-eventos.component.html',

  styleUrl: './agendar-eventos.component.scss'
})
export class AgendarEventosComponent {
  
  scheduleEvent = new FormGroup ({
    nameCouple: new FormControl(""),
    dateEvent: new FormControl(""),
    amountGuests: new FormControl(""),
    place: new FormControl(""),
    value: new FormControl(""),
    menu: new FormControl(""),
    selectedTeams: new FormArray([]),
  })
    menuList = [ 
      {name:"Special" , id:"0"},
      {name:"Special Plus" , id:"0"},
      {name:"Premium" , id:"0"},
      {name:"Premium Plus" , id:"0"},

    ]

    teamList = [
      {name:"Tazky" ,id:"0"},
      {name:"Murilo" ,id:"0"},
      {name:"Mt" ,id:"0"},
      {name:"Th" ,id:"0"},

    ]

    ngOnInit(){

    }


  constructor(private eventService: EventService){}

   confirmEvent () {
    const eventData = this.scheduleEvent.value
    console.log(eventData)

    this.eventService.createEvent(eventData).subscribe({
      next: (response)=>{
        console.log("Evento confirmado com sucesso", response);
      },
      error: (error)=>{
        console.error("Erro ao confirmar evento:", error)

      }
    })

  }

  onTeamCheckboxChange(event: Event, teamName: string){
    const checkbox = event.target as HTMLInputElement
    const selecedTeams = this.scheduleEvent.get("selectedTeams") as FormArray

    if(checkbox.checked){
      selecedTeams.push(new FormControl(teamName))
    } else {
      const index = selecedTeams.controls.findIndex(control => control.value === teamName)
      if (index !== -1){
        selecedTeams.removeAt(index)

      }
    }

  }

 
  


  months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];



  highlightedDates = [
    { month: 1, day: 10 },
    { month: 1, day: 15 },
    { month: 1, day: 20 },
    { month: 3, day: 1 }
  ];

  getDaysInMonth(monthIndex: number): number[] {
    const year = new Date().getFullYear();
    const firstDay = new Date(year, monthIndex, 1).getDay(); 
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    
  
    return [...Array(firstDay).fill(0), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  }

  isHighlighted(day: number, monthIndex: number): boolean {
    return this.highlightedDates.some(h => h.day === day && h.month === monthIndex + 1);
  }

  
}