import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { HttpClient } from '@angular/common/http';
import { ColorService } from 'src/app/services/color.service';
import { response } from 'express';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  dataLoaded = false;
  currentColor:Color;
  emptyBrand:Color;
  filterText="";

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors()
  {
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
      this.dataLoaded = true;
    })
  }

  setCurrentColor(color:Color)
  {
    this.currentColor = color;
  }

  getCurrentColorClass(color:Color)
  {
    if(color == this.currentColor)
    {
      return "list-group-item bg-dark text-white"
    }
    else
    {
      return "list-group-item"
    }
  }
  getAllColorClass(){
    if(!this.currentColor){
      return 'list-group-item bg-dark text-white ';
    }else{
      return 'list-group-item ';
    }
  }
  clearCurrentColor(){
    this.currentColor = this.emptyBrand;
  }

}
