import { Component, Input } from '@angular/core'
import { ISession } from '../shared/Index'
@Component ({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent{
    @Input() session:ISession[]
}