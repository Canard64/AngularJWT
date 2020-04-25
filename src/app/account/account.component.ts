import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService} from '../login-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService : LoginServiceService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.email]

    });
  }

  onSubmit() {
    this.loginInvalid = false;

    if (this.form.valid) {

      try {
        const FirstName = this.form.get('firstName').value;
        const LastName = this.form.get('lastName').value;
        const Password = this.form.get('password').value;
        const Email = this.form.get('email').value;

        this.loginService.createAccount(FirstName,LastName,Email,Password)
        .pipe(first())
        .subscribe(
            data => {
              console.log("/");
                this.router.navigate(["/login"]);
            },
            error => {
                console.log(error);
            });


      } catch (err) {
        this.loginInvalid = true;
      }
      //this.router.navigate(["/game"]);
    }
  }

}
