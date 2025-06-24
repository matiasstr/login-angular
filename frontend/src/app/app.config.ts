import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]), // Rutas vacías, inicializar si necesitas rutas específicas
    provideHttpClient() // Para HTTP, opcional según tu caso
  ]
};
