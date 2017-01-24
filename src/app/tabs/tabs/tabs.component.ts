import {Component, OnInit} from '@angular/core';
import {TabComponent} from "../tab/tab.component";
import {ContentChildren} from "@angular/core";
import {QueryList, AfterContentInit } from "@angular/core";

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit  {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab)=>tab.selected);

    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.select(this.tabs.first);
    }
  }

  select(tab: TabComponent){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.selected = false);

    // activate the tab the user has clicked on.
    tab.selected = true;
  }


}
