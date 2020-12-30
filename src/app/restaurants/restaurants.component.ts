import { RestaurantsService } from "./restaurants.service";
import { Restaurant } from "./restaurant/restaurant.model";
import { Component, OnInit } from "@angular/core";
import { from } from "rxjs/observable/from";

@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html",
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit() {
    this.restaurantsService
      .restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }
}
