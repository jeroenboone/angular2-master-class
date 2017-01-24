import {Injectable} from '@angular/core';
import {CONTACT_DATA} from './data/contact-data';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Inject} from "@angular/core";
import {Contact} from "./models/contact";

@Injectable()
export class ContactsService {
    private API_RESTEINDPOINT = 'http://localhost:4201/api';

  constructor(
    private http: Http,
    @Inject('API_RESTEINDPOINT') private apiEndpoint
  ) {
  }

  getContacts() {
    return this.http.get(this.API_RESTEINDPOINT + '/contacts')
      .map((res) => { return res.json(); })
      .map((data) => { return data.items; });
  }

  getContact(id: any) {
    return this.http.get(this.API_RESTEINDPOINT + '/contacts/' + id)
      .map((res) => { return res.json(); })
      .map((data) => { return data.item; });
  }

  updateContact(contact: Contact){
    let url = this.API_RESTEINDPOINT + `/contacts/${contact.id}`;
    return this.http.put(url, contact);
  }

  search(term: string){
    return this.http.get(this.API_RESTEINDPOINT + '/search?text=' + term)
      .map((res) => { return res.json(); })
      .map((data) => { return data.items; });
  }

}
