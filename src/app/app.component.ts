import { Component, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
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
