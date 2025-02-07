import { Component } from '@angular/core';
import { MainTemplate } from "../mainTemplate/mainTemplate.component";
import { MatDatepickerModule } from '@angular/material/datepicker'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-agendar-eventos',
  imports: [MainTemplate, MatDatepickerModule, CommonModule],
  templateUrl: './agendar-eventos.component.html',

  styleUrl: './agendar-eventos.component.scss'
})
export class AgendarEventosComponent {
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