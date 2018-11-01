import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { TimerComponent } from './timer/timer.component';
import { TreeComponent } from './tree/tree.component';
import { ColorBlockComponent } from './color-block/color-block.component';
import { FormComponent } from './form/form.component';
import { TemplateContainerComponent } from './template-container/template-container.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { FdatePipe } from './fdate.pipe';

@NgModule({
  declarations: [AppComponent, ProductDetailComponent, PersonalCardComponent, TimerComponent, TreeComponent, ColorBlockComponent, FormComponent, TemplateContainerComponent, DemoPipeComponent, FdatePipe],
  imports: [BrowserModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
