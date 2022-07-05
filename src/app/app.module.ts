import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './content/search/search.component';
import { WallComponent } from './content/wall/wall.component';
import { PostComponent } from './content/wall/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMatModule } from './shared/module/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SearchComponent,
    WallComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMatModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
