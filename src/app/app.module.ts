import { CollectionsModule } from './collections/collections.module';
import { ElementsModule } from './elements/elements.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  // 如果不调整次序，那么一旦进入notfound，那么再也无法进入其他的routing，所以AppRouting需要放在最后，防止通配符匹配其他项
  imports: [BrowserModule, ElementsModule, CollectionsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
