import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'timeTable', component: TimetableComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'gallery', component: GalleryComponent },
{ path: 'chat', component: ChatComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
