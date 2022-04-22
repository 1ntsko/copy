import {
  Booking,
  BookingRequest,
  BookingResponse,
  BookingStatusUpdateRequest,
  Status,
} from './../models/booking.model';
import { base_Url } from './../shared/utils/customTokens';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(
    private http: HttpClient,
    @Inject(base_Url) private baseUrl: string
  ) {}

  api = `${this.baseUrl}/booking`;

  createBooking(body: BookingRequest): Observable<Booking> {
    return this.http.post<Booking>(`${this.api}`, body);
  }

  getBookingForEntity(
    entityNo: number,
    fromDate?: string,
    toDate?: string
  ): Observable<BookingResponse> {
    let params = new HttpParams();
    if (fromDate) params = params.append('fromDate', fromDate);
    if (toDate) params = params.append('toDate', toDate);

    return this.http.get<BookingResponse>(`${this.api}/attendee/${entityNo}`, {
      params,
    });
  }

  updateBooking(
    bookingId: number,
    body: BookingStatusUpdateRequest
  ): Observable<Booking> {
    return this.http.put<Booking>(`${this.api}/${bookingId}/status`, body);
  }
}
