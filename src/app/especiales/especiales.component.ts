import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especiales',
  templateUrl: './especiales.component.html',
  styleUrls: ['./especiales.component.css']
})
export class EspecialesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


 

  especiales: String[] =["./assets/bebida-1.jpg","./assets/bebida-2.jpeg","./assets/bebida-3.jpg", "./assets/bebida-4.jpg"];
  nombres: string[]=["Azulito","Cuba","Mojito","Fresota"];


}
