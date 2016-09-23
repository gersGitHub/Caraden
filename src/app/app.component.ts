import { Component, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  animations: 
  [
    trigger('changeSidebarLeftValue', 
    [
      state('showSidebar', style({left:'0'})),
      state('hideSidebar', style({left:'-200px'})),
      transition('showSidebar => hideSidebar', animate("250ms ease")),
      transition('hideSidebar => showSidebar', animate("250ms ease"))
    ]),
    trigger('changeWrapperLeftMargin', 
    [
      state('showWrapper', style({margin:'0'})),
      state('hideWrapper', style({margin:'0 0 0 200px'})),
      transition('showWrapper => hideWrapper', animate("250ms ease")),
      transition('hideWrapper => showWrapper', animate("250ms ease"))
    ]),
    trigger('changeFooterLeftMargin', 
    [
      state('showFooter', style({margin:'0'})),
      state('hideFooter', style({margin:'0 0 0 200px'})),
      transition('showFooter => hideFooter', animate("250ms ease")),
      transition('hideFooter => showFooter', animate("250ms ease"))
    ])
  ]
})

export class AppComponent{

  state1 : string = "showSidebar";
  state2 : string = "hideWrapper";
  state3 : string = "hideFooter";
  toggleSidebarButtonArrow:string = "fa fa-angle-left"

  toggleSidebarMethod()
  {
      this.state1 = (this.state1 == "showSidebar" ? "hideSidebar" : "showSidebar");
      this.state2 = (this.state2 == "hideWrapper" ? "showWrapper" : "hideWrapper");
      this.state3 = (this.state3 == "hideFooter" ? "showFooter" : "hideFooter");
      this.toggleSidebarButtonArrow = (this.toggleSidebarButtonArrow == "fa fa-angle-left" ?
                                          "fa fa-angle-right" : "fa fa-angle-left");
  }
}
