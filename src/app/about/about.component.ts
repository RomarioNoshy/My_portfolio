import { Component, OnInit } from '@angular/core';
// import { saveAs } from 'file-saver';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  imgProfil: string = "assets/images/profile.c.v.jpg";
  altText: string = "Profil-image";
  myCv: string = "assets/Romario resume.pdf"
  facebook:string = "https://www.facebook.com/romario.noshy";
  linkeDin:string = "https://www.linkedin.com/in/romario-noshy-b2a010142/";
  gitHup:string = "https://github.com/RomarioNoshy";
  whatsapp:string = "https://web.whatsapp.com/send/?phone=2001550448966&amp;text&amp;type=phone_number&amp;app_absent=0";

  

  constructor() { }

  ngOnInit(): void {
    
  }

}
