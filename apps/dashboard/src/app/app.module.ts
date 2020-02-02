import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDataModule } from '@dashboard/core-data';
import { MaterialModule } from '@dashboard/material';
import { UiLoginModule } from '@dashboard/ui-login';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects/projects-details/projects-details.component';
import { ProjectsItemComponent } from './projects/projects-item/projects-item.component';
import { WildComponent } from './wild/wild.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    MaterialModule,
    UiLoginModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectsDetailsComponent,
    ProjectsItemComponent,
    WildComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
