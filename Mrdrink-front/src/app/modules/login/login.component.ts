import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import {  FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import {UserOutline, LockOutline} from "@ant-design/icons-angular/icons"



@Component({
  selector: 'app-login',
  standalone: true, // <- isso aqui é essencial
  imports: [
    RouterModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    NzIconModule
  ],
  providers: [
    {
      provide: NZ_ICONS,
      useValue: [UserOutline, LockOutline]
    }
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss' // <-- aqui também tá com erro
})

export class LoginComponent {
  userName: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(): void {

    const regex = /\.?(admin|barman)$/

    const match = this.userName.match(regex);



    if (match) {
      const role = match[1]
      
      if (role === "admin") {

        this.authService.login(this.userName, this.password).subscribe({
          next: (response) => {
            localStorage.setItem("token", response.token);
            this.router.navigate(['/dashboard'])

          },
          error: (err) => {
            alert(err.error.error)

          }

        })

      } if (role === "barman") {

        this.authService.login(this.userName, this.password).subscribe({
          next: (response) => {
            localStorage.setItem("token", response.token);
            this.router.navigate(['/menu'])
          },
          error: (err) => {
            alert(err.error.error)

          }

        })

      }

    }

  }

}
