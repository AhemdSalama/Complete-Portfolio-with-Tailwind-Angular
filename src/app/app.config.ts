import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // شيلنا مع اللي بتعمل إيرور من هنا
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './services/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // بيرجعك لمكان ما كنت
        anchorScrolling: 'enabled', // دي البديل لـ withAnchorScrolling لو التانية عاملة إيرور
         // عشان نستخدم HttpClient في السيرفيسز بدون مشاكل
      }),
      
    ),
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
};
