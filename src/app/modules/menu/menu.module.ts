import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAddItemComponent } from './card-add-item/card-add-item.component';
import { ListCardMenuComponent } from './list-card-menu/list-card-menu.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { MenuRoutingModule } from './menu-routing.module';
import { SecondMenuComponent } from './second-menu/second-menu.component';



@NgModule({
  declarations: [
    CardAddItemComponent,
    ListCardMenuComponent,
    MainScreenComponent,
    SecondMenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule
  ]
})
export class MenuModule { }
