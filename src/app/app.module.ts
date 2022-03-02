import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeTestComponent } from './pages/pipe-test/pipe-test.component';
import { ConvertirPipe } from './pipes/convertir.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeTestComponent,
    ConvertirPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
