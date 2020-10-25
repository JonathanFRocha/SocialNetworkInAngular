import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { signUpService } from './signup/signup.service';

@NgModule({
  declarations:[SignInComponent, SignUpComponent, HomeComponent],
  imports:[CommonModule,FormsModule,ReactiveFormsModule, VMessageModule, HomeRoutingModule, RouterModule],
  providers: [ signUpService ]
})

export class HomeModule { }