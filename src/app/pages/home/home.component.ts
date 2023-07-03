import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../../services/annonce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any;

  constructor(private annonceService: AnnonceService) { }

  OnInit() {}
 
  receiveFilteredData(data: any) {
    this.data = data;
  }
}
