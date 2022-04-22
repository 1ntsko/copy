import { AuthService } from 'src/app/services/auth.service';
import { map, Observable, tap } from 'rxjs';
import {
  Booking,
  BookingResponse,
  Status,
} from './../../../models/booking.model';
import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/user.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss'],
})
export class DoctorDashboardComponent implements OnInit {
  bookings$: Observable<Booking[]> | undefined;

  constructor(
    private bookingService: BookingService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    const entityNo = JSON.parse(
      this.authService.currentUser.displayName
    ).entityNo;

    // new Date().toISOString().toString()

    this.bookings$ = this.bookingService.getBookingForEntity(entityNo).pipe(
      map((bookings: BookingResponse) => {
        return bookings.bookingMap;
      }),
      map((bookings: Record<string, Booking[]>) => {
        return Object.keys(bookings)
          .map((key) => {
            return bookings[key];
          })
          .flat();
      }),
      tap((x) => console.log(x)),
      map((bookings: Booking[]) => {
        return bookings.filter(
          (booking) => booking.status === Status.TENTATIVE
        );
      }),
      map((bookings: Booking[]) => {
        return bookings.splice(0, 5);
      })
    );
  }

  statusChangeHandler(status: any) {
    const bookingUpdate = {
      bookingStatus:
        status.status === Status.CONFIRMED ? Status.CONFIRMED : Status.DECLINED,
      comment: '',
      includeDependent: false,
    };

    this.bookingService.updateBooking(status.id, bookingUpdate);
    console.log(status);
  }
}
