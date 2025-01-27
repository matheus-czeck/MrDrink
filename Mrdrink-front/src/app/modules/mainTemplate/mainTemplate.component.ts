import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  standalone: true,
  selector: 'app-mainTemplate',
  imports: [NzToolTipModule, NzMenuModule , NzIconModule , NzButtonModule, CommonModule],
  templateUrl: './mainTemplate.component.html',
  styleUrl: './mainTemplate.component.scss'
})
export class MainTemplate {

   @ViewChild(
    'enable', { static: false}) enable!: ElementRef;
    isVisible: Boolean = false;

    constructor(private renderer: Renderer2) {}

  openNavMenu(){
    this.isVisible = !this.isVisible;
    const visibility = this.isVisible ? 'visible' : "hidden"
    this.renderer.setStyle(this.enable.nativeElement, "visibility", visibility)
    console.log("clicou")

  }
  

}
