import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { ShowIfLoggedDirective } from 'src/app/shared/directives/show-if-logged/show-if-logged.directive';
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module';
import { PhotoModule } from '../photo/photo.module';
import { photoCommentComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailComponent } from './photo-details.component';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';

@NgModule({
  declarations: [PhotoDetailComponent, photoCommentComponent, PhotoOwnerOnlyDirective],
  exports: [PhotoDetailComponent, photoCommentComponent],
  imports: [CommonModule, PhotoModule, RouterModule, ReactiveFormsModule, VMessageModule, ShowIfLoggedModule]

})
export class PhotoDetailsModule { }