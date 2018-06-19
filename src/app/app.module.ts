import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditableContentComponent } from './editable-content/editable-content.component';
import { PhotoContentComponent } from './photo-content/photo-content.component';

@NgModule({
  declarations: [
    AppComponent,
    EditableContentComponent,
    PhotoContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
