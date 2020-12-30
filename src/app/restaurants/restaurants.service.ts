import { ReviewsComponent } from './../restaurant-detail/reviews/reviews.component';
import { MEAT_API } from "./../app.api";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Http } from "@angular/http";
import { Restaurant } from "./restaurant/restaurant.model";
import { ErrorHandler } from "./../app.error-handler";
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

// Injeção de serviço http
@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return (
      this.http
        // vai acessar a URL quando alguem fazer o Subscribe
        .get(`${MEAT_API}/restaurants`)
        .map((response) => response.json())
        .catch(ErrorHandler.handleError)
    );
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
    }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
    }
}
