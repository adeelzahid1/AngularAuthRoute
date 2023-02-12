import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { concatWith } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private auth: AuthService){}

  ngOnInit(): void { }

  onSubmit(): void{
    console.warn(this.loginForm.value);
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(
        (resutlt) => {},
        (err: Error) =>   {
          alert(err.message);
        }
        
      )
    }
    
  }
  
}
