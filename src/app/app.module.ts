import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'

import {
EventsListComponent,
EventThumbnailComponent,
EventService,
EventDetailsComponent,
CreateEventComponent,
EventRouteActivator,
EventListResolver
} from './events/index'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('you have not save this event')
  }
  return true
}
