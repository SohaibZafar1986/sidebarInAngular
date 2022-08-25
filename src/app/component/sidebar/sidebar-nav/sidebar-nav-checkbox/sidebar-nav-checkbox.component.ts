import {Component, Input, OnInit} from '@angular/core';
import {SidebarNavHelper} from  '../sidebar-nav.service';

@Component({
  selector: 'c-sidebar-nav-checkbox',
  templateUrl: './sidebar-nav-checkbox.component.html',
  styleUrls: ['./sidebar-nav-checkbox.component.scss']
})
export class SidebarNavCheckboxComponent implements OnInit {

  @Input() item: any;

  constructor( public helper: SidebarNavHelper) { }

  ngOnInit(): void {
  }

}
