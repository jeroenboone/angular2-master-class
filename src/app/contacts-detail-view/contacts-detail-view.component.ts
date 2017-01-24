import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Router} from "@angular/router";
import {EventBusServiceService} from "../event-bus-service.service";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  private contact: Contact;

  constructor(private route: ActivatedRoute,
              private contactsService: ContactsService,
              private router: Router,
              private eventBusServiceService: EventBusServiceService) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id)
      .subscribe(contact => {
        this.contact = contact;
        this.eventBusServiceService.emit('appTitleChange', `${contact.name}`);
      })
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['/contact', contact.id, 'edit'], {relativeTo: this.route})
  }

  navigateToList() {
    this.router.navigate(['/']);
  }


}
