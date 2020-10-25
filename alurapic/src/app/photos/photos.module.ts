import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { CardModule } from '../shared/components/card/card.module';
import { PhotoDetailsModule } from './photo-detail/photo-details.module';

@NgModule({
  declarations: [],
  exports: [PhotoComponent],
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    CardModule,
    PhotoDetailsModule
  ]
})

export class PhotosModule { }
