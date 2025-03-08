import { Component, Input } from '@angular/core';
import { InfoCard } from '../../interfaces/dashboard/info-card';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  @Input() infoCard!: InfoCard;
}
