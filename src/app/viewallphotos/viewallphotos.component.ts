import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallphotos',
  templateUrl: './viewallphotos.component.html',
  styleUrls: ['./viewallphotos.component.css']
})
export class ViewallphotosComponent implements OnInit {

  constructor(private api:ApiService) {this.dataFromApi() }

  dataFromApi=()=>{

    this.api.fetchPhotos().subscribe(

      (response)=>{

        this.photos=response
      }
    )
  }


 photos:any=[]

  ngOnInit(): void {
  }

}
