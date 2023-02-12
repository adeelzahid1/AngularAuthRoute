import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { concatWith, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }
   }

  onSubmit(): void{
    console.warn(this.loginForm.value);
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result.name);
          this.router.navigate(['admin']);
        },
        (err: Error) =>   {
          alert(err.message);
        }
        
      )
    }
    
  }
  
}
