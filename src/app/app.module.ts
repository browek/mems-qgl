import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './content/search/search.component';
import { WallComponent } from './content/wall/wall.component';
import { PostComponent } from './content/wall/post/post.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
