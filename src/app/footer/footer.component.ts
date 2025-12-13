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
  whatsapp: string = "https://wa.me/201550448966";
  gmail: string = "mailto:romarionoshy@gmail.com";
  myCv: string = "assets/Romario Noshy Resume.pdf"

  constructor() { }

  toHome() {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }

  toAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }


  toProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  toSkills() {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  }

  toContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  ngOnInit(): void {
  }

}
