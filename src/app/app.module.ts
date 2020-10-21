import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './elements/menu/menu.component';
import { FooterComponent } from './elements/footer/footer.component';
import { SidebarComponent } from './elements/sidebar/sidebar.component';
import { LearnComponent } from './networks/learn/learn.component';
import { CommunityComponent } from './networks/community/community.component';

const appRoutes: Routes = [
  { path: 'learn', component: LearnComponent },
  { path: 'community', component: CommunityComponent, data: { title: 'Comunidad' } },
  { path: '', redirectTo: '/learn', pathMatch: 'full' },
  { path: '**', redirectTo: '/learn' },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    SidebarComponent,
    LearnComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
