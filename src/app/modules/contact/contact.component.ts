import { Component, OnInit } from '@angular/core';
import { faAddressBook, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faFacebook = faFacebookSquare
  faAddressBook = faAddressBook
  faEnvelope = faEnvelope

  constructor() { }

  ngOnInit(): void {
  }

}
