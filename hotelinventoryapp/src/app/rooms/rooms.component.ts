import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  hotelName = 'Hotel California';
  noOfRooms = 10;
  hiderooms=false;
  toggle(){
    this.hiderooms=!this.hiderooms;
  }
}
