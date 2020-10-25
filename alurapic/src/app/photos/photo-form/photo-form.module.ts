import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotoFormComponent } from './photo-form.component';


@NgModule({
  declarations:[PhotoFormComponent],
  imports: [ CommonModule, HttpClientModule, ReactiveFormsModule, VMessageModule, FormsModule, RouterModule, PhotoModule, ImmediateClickModule]
})

export class PhotoFormModule{};