import { AfterViewInit, Component, ComponentRef, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EventCardComponent } from "../event-card/event-card.component";
import { DashboardEventsService } from '../../service/dashboard-service/dashboard-events.service';
import { Events } from '../../interfaces/dashboard/events';
import { InfoCard } from '../../interfaces/dashboard/info-card';
import { EventDetail } from '../../interfaces/dashboard/event-detail';
import { EventDetailComponent } from "../event-detail/event-detail.component";

@Component({
  selector: 'app-events-dashboard',
  standalone: true,
  imports: [EventCardComponent],
  templateUrl: './events-dashboard.component.html',
  styleUrl: './events-dashboard.component.scss'
})
export class EventsDashboardComponent implements OnInit, AfterViewInit{
  eventsInfo!: Events;
  eventDetailInfo!: EventDetail;
  @ViewChild('eventDetail', {read: ElementRef}) eventDetail!: ElementRef;

  constructor(private dashboardEventService: DashboardEventsService){}

  ngOnInit():void{
    // Getting all events
    this.dashboardEventService.getAllEvents().then((prom)=>{
      prom.subscribe((res)=> this.eventsInfo = res);
    });

  }

  ngAfterViewInit(): void {

  }

  eventDetails(id: InfoCard["id"]){
    this.eventDetail.nativeElement.showModal();
    this.dashboardEventService.getEventDetails(id).then((prom)=>{
      prom.subscribe((res)=> this.eventDetailInfo = res);
    });
    // this.eventDetail.nativeElement.showModal();
  }
}
