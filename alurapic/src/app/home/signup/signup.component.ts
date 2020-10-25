import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lowercase.validator';
import { userNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { signUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector.service';
import { userNamePassword } from './username-password.validator';
@Component({
  templateUrl: './signup.component.html',
  providers: [userNotTakenValidatorService]
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private signUpService: signUpService,
    private router: Router,
    private formbuilder: FormBuilder,
    private userNotTakenValidatorService: userNotTakenValidatorService,
    private platformDetectorService: PlatformDetectorService) { }


  ngOnInit(): void {
    const fn = this.userNotTakenValidatorService.checkUserNameTaken();
    this.signupForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, lowerCaseValidator, Validators.minLength(2), Validators.maxLength(30)], this.userNotTakenValidatorService.checkUserNameTaken()],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
    },{
      validator: userNamePassword
    });
    this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus()
  }

  signUp() {
    if (this.signupForm.valid && !this.signupForm.pending) {
      const newUser = this.signupForm.getRawValue() as NewUser;
      this.signUpService
        .signUp(newUser)
        .subscribe(
          () => this.router.navigate(['']),
          err => console.log(err)
        );
    }
  }

}