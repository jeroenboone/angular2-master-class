import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactsAppComponent } from './contacts.component';
import {ContactsService} from "./contacts.service";
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import {HttpModule} from "@angular/http";
import {OpaqueToken} from "@angular/core";
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import {FormsModule} from "@angular/forms";
import {Observable} from "rxjs";
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';

const API_RESTEINDPOINTn = new OpaqueToken('apiEndpoint')

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent, ContactsDetailViewComponent, TabsComponent, TabComponent],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    FormsModule
  ],
  providers: [
    ContactsService,
    {provide: 'API_RESTEINDPOINT', useValue: 'http://localhost:4201/api'}
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
