import {Component,OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {ImageErrorComponent} from './image-error.component';
import {ImageService} from './image.service';
import {Router} from '@angular/router';
@Component({
    selector:"app-image-form",
    templateUrl:"./image-form.component.html",
    styles:[
        '.thumbnail {'+
        '       width:200px; heigth:200px;'
    ],
    providers:[ImageService]
})

export class ImageFormComponent implements OnInit{
    imageForm:FormGroup;
    image:any;
    file:any;

    constructor(public snackBar:MatSnackBar, 
        private imageService:ImageService,
        private router:Router){}

    ngOnInit(){
        this.imageForm=new FormGroup({
            name: new FormControl(null,Validators.required),
            file:new FormControl(null, Validators.required)
        });
    }

    onFileChange(event){
        if(event.target.files && event.target.files.length>0){//Identifica si hay archivos
            const file=event.target.files[0];
            if(file.type.includes("image")){//Evaluar si es una imagen
                const reader= new FileReader();
                reader.readAsDataURL(file);
                reader.onload=function load(){
                    this.image=reader.result; //Asignar al thumbnail
                }.bind(this);
                this.file=file;
            }else{
                this.snackBar.openFromComponent(ImageErrorComponent, {//Muestra el error
                    duration: 500,
                });
            }
        }
    }

    onSubmit(){
        const form=this.imageForm;
        if(form.valid){//Verifica que el formulario sea válido y pasa parámetros
            this.imageService.addPicture(form.value.name,this.file)
            .subscribe(
                (data:any)=>{
                    console.log(data);
                    this.router.navigate([`/show/${data.file.filename}`]);
                },
                err=>console.log
            )
        }
    }

}