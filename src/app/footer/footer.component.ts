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
  gmail:string = "mailto:romarionoshy@gmail.com";
  constructor() { }

  ngOnInit(): void {
  }

}
