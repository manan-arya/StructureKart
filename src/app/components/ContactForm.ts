import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from '../../../Services/fetch-data-service.service';

@Component({
    selector: 'contact-form',
    templateUrl: './ContactForm.html',
    styleUrls: []
})

export class ContactForm implements OnInit {
  focus: any;
  focus1: any;

  constructor(private _fetchDataService: FetchDataServiceService) { 

  }

  ngOnInit() {

  }

  public SubmitData(){
    console.log("Hello Duniya 2");
    this._fetchDataService.writeUserData("hello", "manan@g.com", "hello world");
  }

}
