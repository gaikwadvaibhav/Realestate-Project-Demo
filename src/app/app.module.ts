import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import {MatSelectModule} from '@angular/material';
import {MatStepperModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';

import { NouisliderModule } from 'ng2-nouislider';
import {MatGridListModule, MatSliderModule, MatFormFieldModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertySerService } from './add-property/property-ser.service';
import { HttpModule } from '@angular/http';
import { DetailPropertyComponent } from './detail-property/detail-property.component';
import { TopPropertyComponent } from './top-property/top-property.component';
import { SlidingCardComponent } from './sliding-card/sliding-card.component';
import { LoginServiceService } from './login/login-service.service';
import { RegisterUserService } from './register/register-user.service';
import { PropertyByAgentComponent } from './home/property-by-agent/property-by-agent.component';
import { PropertyByLocationComponent } from './home/property-by-location/property-by-location.component';
import { PropertyForRentComponent } from './home/property-for-rent/property-for-rent.component';
import { PropertyForSaleComponent } from './home/property-for-sale/property-for-sale.component';
import { FooterComponent } from './footer/footer.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SearchboxComponent,
    AddPropertyComponent,
    DetailPropertyComponent,
    TopPropertyComponent,
    SlidingCardComponent,
    PropertyByAgentComponent,
    PropertyByLocationComponent,
    PropertyForRentComponent,
    PropertyForSaleComponent,
    FooterComponent,
    AgentsComponent,
    AgentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatSliderModule,MatSelectModule,
    ReactiveFormsModule,MatStepperModule,
    MatFormFieldModule,MatInputModule,
    MatRadioModule,NouisliderModule,
    MatGridListModule
  ],
  providers: [RegisterUserService,LoginServiceService,PropertySerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
