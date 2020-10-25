import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as StackTrace from 'stacktrace-js'



@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

  constructor(private injector: Injector){ }

  handleError(error: any): void {

    const url = location instanceof PathLocationStrategy ? location.path() : '';

    const router = this.injector.get(Router)

    console.log('passei pelo handler')
    const message = error.message ? error.message : error.toString();
    router.navigate(['/error'])
    StackTrace
      .fromError(error)
      .then(stackframes => {
        const stackAsString = stackframes
          .map(sf => sf.toString())
          .join('\n');
          console.log(message)
          console.log(stackAsString)
      })
  }
}