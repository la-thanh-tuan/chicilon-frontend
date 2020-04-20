import { Component, OnInit, AfterViewChecked, ElementRef } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewChecked {

  constructor(private elementRef: ElementRef) { }
  ngAfterViewChecked(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/custom.js";
    this.elementRef.nativeElement.appendChild(s)
  }


  ngOnInit() {
  }

}
