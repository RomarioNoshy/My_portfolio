import { animate, animation, style, transition, trigger, state,} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    
  ]
})
export class AboutComponent implements OnInit {

  imgProfil: string = "assets/images/profile.c.v.jpg";
  altText: string = "Profil-image";
  myCv: string = "assets/Romario resume.pdf"
  facebook:string = "https://www.facebook.com/romario.noshy";
  linkeDin:string = "https://www.linkedin.com/in/romario-noshy-b2a010142/";
  gitHup:string = "https://github.com/RomarioNoshy";
  // whatsapp:string = "https:/wa.me/+2001550448966";
  gmail:string = "mailto:romarionoshy@gmail.com";
  
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
