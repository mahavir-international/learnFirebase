import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { environment } from 'src/environments/environment';
import { SetGetComponent } from './set-get/set-get.component';
import { CourseComponent } from './course/course.component';
import { StudenInfoComponent } from './studen-info/studen-info.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    SetGetComponent,
    CourseComponent,
    StudenInfoComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatSortModule,

    MatTableModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
