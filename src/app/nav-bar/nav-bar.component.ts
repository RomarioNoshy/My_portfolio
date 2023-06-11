import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toHome() {
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"}); 
  }

  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"}); 
  }

  toServices(){
    document.getElementById("services")?.scrollIntoView({behavior:"smooth"}); 
  }

  toProjects(){
    document.getElementById("projects")?.scrollIntoView({behavior:"smooth"}); 
  }

  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}); 
  }

}
