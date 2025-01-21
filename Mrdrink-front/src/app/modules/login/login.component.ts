import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormBuilder, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  imports: [
    RouterModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    FormsModule


  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
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
