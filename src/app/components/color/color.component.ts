import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { HttpClient } from '@angular/common/http';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  dataLoaded = false;

  apiUrl = "https://localhost:44395/api/Colors/getall";

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors()
  {
    this.httpClient
    .get<ColorResponseModel>(this.apiUrl)
    .subscribe((response)=>{
      this.colors = response.data
      this.dataLoaded = true;
    });
  }

}
