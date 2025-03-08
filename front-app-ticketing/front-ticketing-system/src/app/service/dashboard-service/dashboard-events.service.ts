import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from '../../interfaces/dashboard/events';
import { Observable } from 'rxjs';
import { InfoCard } from '../../interfaces/dashboard/info-card';

@Injectable({
  providedIn: 'root'
})
export class DashboardEventsService {
  applicationId = '1364cf91-d24f-4522-b8e4-0cebfa95a8b0';
  userId='e00aa321-0aa1-4fe0-998e-b4dc0db1bf64';


  constructor(private httpClient: HttpClient) { }

  async getAllEvents(){
    const events = this.httpClient.get<Events>(this.applicationId);
    return events;
  }

  async getEventDetails(id: InfoCard["id"]){
    const events = this.httpClient.get<Events>('https://goldfish-app-fbulw.ondigitalocean.app/Event?applicationId=1364cf91-d24f-4522-b8e4-0cebfa95a8b0');
    return events;
  }
}
