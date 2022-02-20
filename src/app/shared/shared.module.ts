import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { RightsideComponent } from './components/rightside/rightside.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RightsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    MatListModule

  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RightsideComponent
  ]
})
export class SharedModule { }
