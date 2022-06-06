import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: AppComponent },
      { path: 'image/:id', component: ImageDetailsComponent },
      { path: 'home', component: ImageGridComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
