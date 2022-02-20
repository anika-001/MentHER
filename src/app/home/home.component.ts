import { Component, OnInit } from '@angular/core';
import { spaces } from '../JSONdata/spaces';
// import { faComments, faNewspaper, faPhotoVideo, faPlay, faShoppingBasket, faTh } from '@fortawesome/free-solid-svg-icons';
// import { spaces } from '../JsonData/spaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  spaces: any;
  // icons = [faComments, faTh, faPlay, faPhotoVideo, faShoppingBasket, faNewspaper];
  ngOnInit(): void {
    this.spaces = spaces;
  }

}