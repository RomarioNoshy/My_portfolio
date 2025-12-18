import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  portfolio_img:string ="assets/images/portfolio.png";
  store_img:string = "assets/images/Book mark.png";
  movies_img:string = "assets/images/movie.png";
  
  portLink:string = "https://romarionoshy.github.io/Portofolio-Page/";
  myStoreLink:string = "https://romarionoshy.github.io/App-Store/";
  movieLink:string = "https://romarionoshy.github.io/Movies-App/#/register";
  constructor() { }

  ngOnInit(): void {
  }

}
