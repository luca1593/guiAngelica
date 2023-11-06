import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientComponent } from './Pages/client/list-client/list-client.component';
import { PayementsComponent } from './Pages/payements/payements.component';
import { ReleveDeCompteComponent } from './Pages/releve-de-compte/releve-de-compte.component';
import { InsertionsComponent } from './Pages/insertions/insertions.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: 'tous-les-clients',
        component: ListClientComponent
      },
      {
        path: 'payements',
        component: PayementsComponent
      },
      {
        path: 'releve-de-compte', component: ReleveDeCompteComponent
      },
      {
        path: 'insertions', component: InsertionsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListClientComponent,
    PayementsComponent,
    ReleveDeCompteComponent,
    InsertionsComponent,
    DashboardComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
