import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [AppComponent, ProductDetailComponent, PersonalCardComponent, TimerComponent],
  imports: [BrowserModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
