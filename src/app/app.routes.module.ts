import {RouterModule,Routes} from '@angular/router';
import {ImageFormComponent} from './image-form.component';
import {ShowImageComponent} from './show-image.component';
const routes:Routes=[
    {path:'',component:ImageFormComponent},
    {path:'show/:filename',component:ShowImageComponent}
]

export const RouterImage=RouterModule.forRoot(routes);