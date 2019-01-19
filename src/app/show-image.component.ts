import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
    selector:'app-show-image',
    templateUrl:'./show-component.component.html',
    styles:[
        'img {'+
        '       width:300px; heigth:300px;'
    ]
})

export class ShowImageComponent implements OnInit{
    filename:string;
    constructor(private router:ActivatedRoute){
        this.filename='http://localhost:3000/uploads/';
    }
    ngOnInit(){
        this.router.params.subscribe((params)=>{
            this.filename=this.filename+params.filename;
        })
    }
}