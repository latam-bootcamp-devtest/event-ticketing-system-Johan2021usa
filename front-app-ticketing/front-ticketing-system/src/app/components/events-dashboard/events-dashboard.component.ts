import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EventCardComponent } from "../event-card/event-card.component";
import { DashboardEventsService } from '../../service/dashboard-service/dashboard-events.service';
import { Events } from '../../interfaces/dashboard/events';
import { InfoCard } from '../../interfaces/dashboard/info-card';
import { EventDetailComponent } from "../event-detail/event-detail.component";

@Component({
  selector: 'app-events-dashboard',
  standalone: true,
  imports: [EventCardComponent, EventDetailComponent],
  templateUrl: './events-dashboard.component.html',
  styleUrl: './events-dashboard.component.scss'
})
export class EventsDashboardComponent implements OnInit{
  eventsInfo!: Events;
  @ViewChild('eventDetail') eventDetail!: ElementRef;

  constructor(private dashboardEventService: DashboardEventsService){}

  ngOnInit():void{
    // Getting all events
    this.dashboardEventService.getAllEvents().then((prom)=>{
      prom.subscribe((res)=> this.eventsInfo = res);
    });

  }

  eventDetails(id: InfoCard["id"]){
    console.log("event id: ", id);
    this.dashboardEventService.getEventDetails(id);
    // this.eventDetail.nativeElement.showModal();
  }
}
