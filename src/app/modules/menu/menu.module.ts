import { CardAddItemComponent } from './views/card-add-item/card-add-item.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { ListCardMenuComponent } from './views/list-card-menu/list-card-menu.component';
import { MainScreenComponent } from './views/main-screen/main-screen.component';
import { SecondMenuComponent } from './views/second-menu/second-menu.component';



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
