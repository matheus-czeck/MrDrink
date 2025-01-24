import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-dashboard',
  imports: [NzToolTipModule, NzMenuModule , NzIconModule , NzButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  userName: string = "Gustavo"
   @ViewChild(
    'enable', { static: false}) enable!: ElementRef;
    isVisible: Boolean = true;

    constructor(private renderer: Renderer2) {}

  openNavMenu(){
    this.isVisible = !this.isVisible;
    const visibility = this.isVisible ? 'visible' : "hidden"
    this.renderer.setStyle(this.enable.nativeElement, "visibility", visibility)
    console.log("clicou")

  }
  

}
