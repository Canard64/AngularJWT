import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService} from '../login-service.service'
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
   form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor( private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService : LoginServiceService) {

   }

  async ngOnInit(){
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;

        this.loginService.login(username,password)
        .pipe(first())
        .subscribe(
            data => {
              console.log(this.returnUrl);
                this.router.navigate([this.returnUrl]);
            },
            error => {
                console.log(error);
            });


      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }


}
