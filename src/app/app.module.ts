import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTrendComponent } from './components/view-trend/view-trend.component';
import { companyEffects } from './ngrx/effects/companyEffects';
import { companyReducer } from './ngrx/reducer/CompanyReducer';
import { SearchPipe } from './pipes/searchPipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewTrendComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
