import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const modules=[
    MatFormFieldModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule
]

@NgModule({
    imports:modules,
    exports:modules
})

export class MaterialModule{}