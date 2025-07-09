import { Routes } from '@angular/router';
import { Home }        from './components/home/home';
import { Map }        from './components/map/map';
import { ResourcesView }        from './components/resources-view/resources-view';
import { AddImprovement }        from './components/add-improvement/add-improvement';
import { EditImprovement }        from './components/edit-improvement/edit-improvement';


export const routes: Routes = [
 {path: '', redirectTo: '/home', pathMatch: 'full' }  ,
    {path: 'home',       component: Home}       ,
    {path: 'map',   component: Map},
    {path: 'resources',   component: ResourcesView},
    {path: 'addRSS',   component:AddImprovement },
    {path: 'editRSS',   component:EditImprovement }

];


 