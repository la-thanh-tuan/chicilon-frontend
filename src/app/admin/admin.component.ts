import { Component, OnInit, AfterViewChecked, ElementRef } from '@angular/core';
import {SystemConstants} from '../core/common/system.constants';
import {UrlConstants} from '../core/common/url.constants';
import {UtilityService} from '../core/services/utility.service';
import {FormsModule} from '@angular/forms';
import {NotificationService} from '../core/services/notification.service';
import {AuthenService} from '../core/services/authen.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewChecked {

  constructor(private elementRef: ElementRef,
    private utilityService: UtilityService) { }
  ngAfterViewChecked(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/custom.js";
    this.elementRef.nativeElement.appendChild(s)
  }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this.utilityService.navigate(UrlConstants.LOGIN);
  }

}
