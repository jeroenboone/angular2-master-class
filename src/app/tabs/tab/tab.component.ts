import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
import {TabsComponent} from "../tabs/tabs.component";

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() selected: boolean = false;
  @Input() title: String = '';


  constructor(
    private tabs: TabsComponent
  ) { }

  ngOnInit() {
    this.tabs.addTab(this);
  }

  selecteTab() {
    this.selected = true;
  }

  deSelecteTab() {
    this.selected = false;
  }
}