import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { MainTemplate } from "../mainTemplate/mainTemplate.component";
import { MatDatepickerModule } from '@angular/material/datepicker'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import { EventService } from '../../services/serviceEvent/event.service';
import { GetInformations } from '../../services/serviceEvent/getInformations.service';
import { ChangeDetectorRef } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedTeams } from '../../services/serviceCollaborators/SharedTeams.service';
import { NzMessageService} from 'ng-zorro-antd/message'

@Component({
  selector: 'app-agendar-eventos',
  standalone: true,
  imports: [ MatSnackBarModule,MainTemplate, FormsModule, MatDatepickerModule, CommonModule, ReactiveFormsModule],
  templateUrl: './agendar-eventos.component.html',
  styleUrls: ['./agendar-eventos.component.scss']
})
export class AgendarEventosComponent implements OnInit{

  private snackBar = inject(MatSnackBar)

  constructor(
    private eventService: EventService, 
    private getInformations: GetInformations,
    private cdr: ChangeDetectorRef,
    private sharedTeams: SharedTeams,
    private message: NzMessageService
  ){}
  
  infoEvents: FormGroup = new FormGroup ({
    nameCouple: new FormControl(""),
    dateEvent: new FormControl(null),
    amountGuests: new FormControl(null),
    place: new FormControl(""),
    value: new FormControl(null),
    menu: new FormControl("Cardápio"),
    selectedTeams: new FormArray([]),
  })
    menuList = [ 
      {name:"Clássico Médio" },
      {name:"Clássico Master" },
      {name:"Especial Médio"},
      {name:"Especial Master"},
      {name:"Premium Médio" },
      {name:"Premium Master" },
      {name:"Premium Gold Médio"},
      {name:"Premium Gold Master"},

    ]
    teamList: any[] = [];

    ngOnInit(){
      this.loadEvents(this.selectedYear);
      this.searchingTeam()
    }
    onYearChange(year: number){
     this.selectedYear = year
     this.loadEvents(year)
    }

    openAndCloseCancelEvent = false
    openWindowCancelEvent(){
      this.openAndCloseCancelEvent = true


    }
    closeCancelEvent(){
      this.openAndCloseCancelEvent = false
    }
    
    
  loadEvents(year: number) {
    this.getInformations.getEvents().subscribe(
      (data) => {
        const allEvents = [...(data.confirmedEvent || []), ...(data.scheduleEvent || [])];
        console.log("informações data", allEvents);
        
        this.highlightedDates = allEvents
          .filter(event => new Date(event.dateEvent).getFullYear() === year)
          .map(event => ({
            day: new Date(event.dateEvent).getUTCDate(),
            month: new Date(event.dateEvent).getUTCMonth() + 1,
            year: new Date(event.dateEvent).getFullYear(),
            type: data.confirmedEvent?.some((e: { dateEvent: string }) => e.dateEvent === event.dateEvent) 
            ? "confirmed" 
            : "schedule"
          }));

          this.nameCoupleRemoveEvent = allEvents
          .filter(event => event.nameCouple)
          .map(event=> {
              const date = new Date(event.dateEvent)
              const formattedDate = date.toLocaleDateString("pt-BR")
              return `${event.nameCouple} - ${formattedDate}`
          })

        console.log('Eventos destacados:', this.highlightedDates);
        console.log('casal capturado:', this.nameCoupleRemoveEvent);
      },
      () => (this.highlightedDates = [])
    );
  }

  nameCoupleRemoveEvent: any []= []

  selectedEvent:string = ""

  cancelEvent(){
      const [nameCouple, dateEvent] = this.selectedEvent.split(' - ')
      const eventtoDelete = {
        nameCouple: nameCouple.trim(),
      }
      console.log("Nome e data recebidos:",nameCouple )

    this.eventService.deleteEvent(nameCouple).subscribe({
      next: (resp)=>{
        this.message.success("Evento removido com sucesso!")
        console.log("Evento cancelado com sucesso!")


      }, error:(err)=>{
        this.message.error("Erro ao remover evento, tente novamente...")
        console.log("erro ao remover colaborador")

      }
    })


  }


  searchingTeam() {
    this.sharedTeams.getTeamList().subscribe({
      next: (teams)=>{
        this.teamList = teams
      },
      error:(err)=>{
        console.error("Erro ao carregar equipe", err)

      }
    })
  }

  
   confirmEvent () {
    const eventData = this.infoEvents.value

    this.eventService.createEvent(eventData).subscribe({
      next: (response)=>{
        this.message.success("Evento confirmado com sucesso!")

        console.log("Evento confirmado com sucesso", response);
      },
      error: (error)=>{
        console.error("Erro ao confirmar evento:", error)
        this.message.error("Erro ao confirmar evento, tente novamente...")
      }
    })

  }

  

  scheduleEvent() {
    const eventData = this.infoEvents.value
    console.log("evento captado ScheduleEvent: ",eventData)
    
    this.eventService.scheduleEvent(eventData).subscribe({
      next: (response) =>{
        console.log("Evento agendado com sucesso", response)
        this.message.success("Evento agendado com sucesso!")

      },
      error: (error)=>{
        console.log("Erro ao agendar evento:", error)
        this.message.error("Erro ao agendar evento, tente novamente...")

      }
  })

    }


  onTeamCheckboxChange(event: Event, teamName: string){
    const checkbox = event.target as HTMLInputElement
    const selectedTeams = this.infoEvents.get("selectedTeams") as FormArray

    if(checkbox.checked){
      selectedTeams.push(new FormControl(teamName))
    } else {
      const index = selectedTeams.controls.findIndex(control => control.value === teamName)
      if (index !== -1){
        selectedTeams.removeAt(index)

      }
    }

  }

 
  


  months: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];



  highlightedDates: any [] = [];

 
  


  currentYear: number = new Date().getFullYear()
  selectedYear: number = this.currentYear
  years: number[] = [this.currentYear, this.currentYear + 1]
  
  

  getDaysInMonth(monthIndex: number, year: number): number[] {
    const firstDay = new Date(year, monthIndex, 1).getDay(); 
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    
  
    return [
      ...Array(firstDay).fill(0), 
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
    ];
  }

  getHighlightType(day: number, monthIndex: number, year: number): string | null {
    
    const event = this.highlightedDates.find (
      h => h.day === day && h.month === monthIndex + 1 && h.year === year
    );
    return event ? event.type : null 
  }

  
}