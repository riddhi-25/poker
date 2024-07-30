import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms'
import { AuthService } from '../authService/auth.service';
import {HttpClientModule} from '@angular/common/http'
import {Router} from '@angular/router'

interface loginData{
  username?:string|null|undefined;
  password?:string|null|undefined;
}

@Component({
  selector: 'planning-poker-app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent {

  userData !: loginData;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router){}

  onSubmit():void{
    this.userData= this.loginForm.value;
    const username = this.userData?.username;
    const password = this.userData?.password;
    this.authService.loginUser(username, password).subscribe((res:any)=>{
      this.router.navigate(['/home']);
    },
    (error:any)=>{
      alert('Invalid credentials');
    }
  );
  }

}
