import { Component } from '@angular/core';
import { MainTemplate } from '../mainTemplate/mainTemplate.component';



@Component({
  standalone: true,
  selector: 'app-dash-board',
  imports: [MainTemplate],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent {
  userName: string = "Gustavo"

  agendados: number = 12
  naoConfirmados: number = 4
  confirmados: number = 9


}
