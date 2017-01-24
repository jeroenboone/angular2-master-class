import {Component} from '@angular/core';
import {Contact} from './models/contact';
import {ContactsService} from "./contacts.service";
import {EventBusServiceService} from "./event-bus-service.service";

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent {
  title: string = '';


  constructor(
    private eventBusServiceService: EventBusServiceService
  ) {
  }

  ngOnInit () {
    this.eventBusServiceService.observe('appTitleChange')
      .subscribe(title => this.setTitle(title));
  }

  private setTitle(title: string) {
    return this.title = title;
  }


}
