import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }

 
  ngOnInit(): void {
  }

  

  home = [

    

    {
      imgURL: "assets/images/img1.jpg",
      venue: "Royal Hotel - Ruby Hall",
      venueaddress: "Whitefield Main Road, Opp. ITPL, Benguluru, 5007",
      star: 4.2,
      rating: 8,
      price: 8000,
      pp: 400,
      features: ["Banquet Hall", "min. 20 pax", "Veg. Meal", "Water Bottle", "Projector Only", "Sationary", "Podium"]
    },

   {
     imgURL: "assets/images/img2.jpg",
     venue: "The Den",
     venueaddress: "Prestige Shanti Niketan, ITPL, Bengaluru, 570077",
     star: 4.8,
     rating: 12,
     price: 12000,
     pp: 500,
     features: ["Banquet Hall", "min. 40 pax", "Veg. Meal", "Water Bottle", "Projector Only", "Sationary", "Stage", "Mic + Sound System"] 

},
  


  ]

}
