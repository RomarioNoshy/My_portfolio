import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  portLink: string = "https://romarionoshy.github.io/Portofolio-Page/";
  myStoreLink: string = "https://romarionoshy.github.io/App-Store/";
  movieLink: string = "https://romarionoshy.github.io/Movies-App/#/register";

  facebook: string = "https://www.facebook.com/romario.noshy";
  linkeDin: string = "https://www.linkedin.com/in/romario-noshy-b2a010142/";
  gitHup: string = "https://github.com/RomarioNoshy";
  whatsapp: string = "https://web.whatsapp.com/send/?phone=2001550448966&amp;text&amp;type=phone_number&amp;app_absent=0";
  constructor() { }

  ngOnInit(): void {
  }

}
