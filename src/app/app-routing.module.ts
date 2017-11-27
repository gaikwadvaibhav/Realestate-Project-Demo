import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { DetailPropertyComponent } from './detail-property/detail-property.component';
import { TopPropertyComponent } from './top-property/top-property.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
 
const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },  
  { path: 'home', component: HomeComponent }, 
  { path: 'search', component: SearchboxComponent },    
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'topproperty', component: TopPropertyComponent},    
  { path: 'addproperty', component: AddPropertyComponent},
  {path: 'detailproperty', component: DetailPropertyComponent},
  {path: 'agents', component: AgentsComponent},
  {path: 'agentdetail', component: AgentDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
