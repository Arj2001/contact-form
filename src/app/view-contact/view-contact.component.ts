import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.putContactData()
  }

  contactData:any

  putContactData=()=>{
    this.myApi.getContactData().subscribe(
      (data)=>{
        this.contactData = data
      }
    )
  }

  ngOnInit(): void {
  }

}
