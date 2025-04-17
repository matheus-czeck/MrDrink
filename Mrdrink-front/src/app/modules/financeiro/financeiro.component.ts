import { Component, OnInit } from '@angular/core';
import { MainTemplate } from '../mainTemplate/mainTemplate.component';
import { GetInformations } from '../../services/serviceEvent/getInformations.service';

@Component({
  selector: 'app-financeiro',
  imports: [MainTemplate],
  templateUrl: './financeiro.component.html',
  styleUrl: './financeiro.component.scss'
})
export class FinanceiroComponent implements OnInit {

  constructor(
    private getInformations: GetInformations
  ) {}

  ngOnInit(){
    this.getValues()

  }

  budgetValeu: [] = []
  totalBudget = 0

  getValues(){
    this.getInformations.getEvents().subscribe({
      next:(data)=>{

        this.budgetValeu = data.confirmedEvent.map((
          value:{value: number}) => Number(value.value
        ))
        this.totalBudget= this.budgetValeu.reduce((sum, sumValue) => sum + sumValue, 0)
        
        console.log( this.totalBudget)

      }, error:(err)=>{
        console.log(err)
      }
    })

  }

}
