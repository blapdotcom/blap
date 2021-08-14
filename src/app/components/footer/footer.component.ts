import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
   selector: 'app-footer',
   templateUrl: './footer.component.html',
   styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   faFacebook = faFacebookSquare
   faInstagram = faInstagram
   year: number = new Date().getFullYear()

   constructor() { }

   ngOnInit(): void {
   }

   facebook() :void {
      window.open("https://www.facebook.com/geeksfortechs/")
   }

   instagram(): void {
      
   }
}
