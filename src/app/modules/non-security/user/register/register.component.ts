import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@models';
import { AuthService } from '@services/api';
import { USER_CONFIG } from '@constants/user.constant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm;
  public isSubmitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', [ Validators.required ]],
      lastName: ['', [ Validators.required ]],
      phone: ['', [ Validators.required, Validators.minLength(9)]],
    });
  }
  get f() { return this.registerForm.controls; }

  ngOnInit(): void {
 
  }

  register(){ 
    const user: User = new User({
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
      firstName: this.registerForm.controls.firstName.value,
      lastName: this.registerForm.controls.lastName.value,
      phone: this.registerForm.controls.phone.value
    });
    return this.authService.fnRegister(user).subscribe((res) => {
      this.router.navigate(['users','login']);
    }, (err) => {});
  }
}
