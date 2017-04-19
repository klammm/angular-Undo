import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppStore, appStoreProviders } from './app.store';
import { MuscleListComponent } from './muscle-list/muscle-list.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MuscleListComponent,
    ExerciseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ appStoreProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
