import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // شيلنا مع اللي بتعمل إيرور من هنا
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes, 
      withInMemoryScrolling({ 
        scrollPositionRestoration: 'enabled', // بيرجعك لمكان ما كنت
        anchorScrolling: 'enabled' // دي البديل لـ withAnchorScrolling لو التانية عاملة إيرور
      })
    )
  ]
};