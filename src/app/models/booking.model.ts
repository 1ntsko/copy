import { Patient } from './patient.model';

export interface Booking {
  attendees: Attendee[];
  description: string;
  endTime: string;
  id: number;
  startTime: string;
  status: Status;
  statusComment: string;
  title: string;
}

export interface BookingRequest {
  attendees: Attendee[];
  description: string;
  endDate: string;
  id: number;
  organiser: number;
  startDate: string;
  title: string;
}

export interface BookingStatusUpdateRequest {
  bookingStatus: Status;
  comment: string;
  includeDependent: boolean;
}

export interface BookingResponse {
  bookingMap: Record<string, Booking[]>;
  endDate: string;
  startDate: string;
}

export interface Attendee {
  attendeeType: AttendeeType;
  entity: Patient;
  entityNo: number;
}

export enum Status {
  CONFIRMED = 'CONFIRMED',
  TENTATIVE = 'TENTATIVE',
  DECLINED = 'DECLINED',
  CANCELLED = 'CANCELLED',
}

export enum AttendeeType {
  PATIENT = 'PATIENT',
  PROVIDER = 'PROVIDER',
}
