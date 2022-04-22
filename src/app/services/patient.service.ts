import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { base_Url } from '../shared';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(
    private http: HttpClient,
    @Inject(base_Url) private baseUrl: string
  ) {}

  api = `${this.baseUrl}/member`;

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${base_Url}`);
  }

  getSinglePatient(entityNo: number): Observable<Patient> {
    return this.http.get<Patient>(`${base_Url}/${entityNo}`);
  }

  searchPatient(firstName: string, lastName?: string): Observable<Patient[]> {
    let params = new HttpParams();
    if (firstName) params = params.set('firstName', firstName);
    if (lastName) params = params.set('lastName', lastName);

    return this.http.get<Patient[]>(`${base_Url}/search`, { params });
  }
}
