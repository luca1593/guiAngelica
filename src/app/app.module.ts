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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataTablesModule } from "angular-datatables";


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: 'tous-les-clients',
        component: ListClientComponent,
        data: {
          title: "Tous les clients"
        }
      },
      {
        path: 'payements',
        component: PayementsComponent,
        data: {
          title: "Payements"
        }
      },
      {
        path: 'releve-de-compte', component: ReleveDeCompteComponent,
        data: {
          title: "Relevé de compte"
        }
      },
      {
        path: 'insertions', component: InsertionsComponent,
        data: {
          title: "Insertions"
        }
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
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
