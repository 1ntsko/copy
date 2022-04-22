import { Booking, Status } from './../../../models/booking.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {
  @Input() booking: Booking | undefined;
  @Output() statusType = new EventEmitter();

  status = Status;

  constructor() {}

  ngOnInit() {}

  updateBooking(status: string, id: number | undefined) {
    if (id) {
      this.statusType.emit({
        status: status,
        id: id,
      });
    }
  }
}
