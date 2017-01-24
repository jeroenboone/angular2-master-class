import {Component, OnInit} from '@angular/core';
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts.service";
// import 'rxjs/Observable ';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/merge'

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  // contacts: Array<Contact>;
  constructor(private contactsService: ContactsService) {
  }


  ngOnInit() {
    // this.contacts = this.contactsService.getContacts();
    this.contacts =  this.terms$
      .debounceTime(400)                                    // Observable<String>
      .distinctUntilChanged()                               // Observable<String>
      .switchMap(term =>this.contactsService.search(term))  // Observable<Array<<Contact>>
      .merge(this.contactsService.getContacts())            // Observable<Array<<Contact>>
    ;
  }

  // search(term: string) {
  //   this.contacts = this.contactsService.search(term);
  // }

}
