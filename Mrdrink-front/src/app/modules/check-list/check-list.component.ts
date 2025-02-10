import { Component } from '@angular/core';
import { MainTemplate } from '../mainTemplate/mainTemplate.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-check-list',
  imports: [MainTemplate, ReactiveFormsModule],
  templateUrl: './check-list.component.html',
  styleUrl: './check-list.component.scss'
})
export class CheckListComponent {

}
