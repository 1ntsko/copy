import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { base_Url } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(
    private http: HttpClient,
    @Inject(base_Url) private baseUrl: string
  ) {}

  api = `${this.baseUrl}/practitioner`;

  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${base_Url}`);
  }

  getSingleDoctor(entityNo: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${base_Url}/${entityNo}`);
  }

  searchDoctor(firstName: string, lastName?: string): Observable<Doctor[]> {
    let params = new HttpParams();
    if (firstName) params = params.set('firstName', firstName);
    if (lastName) params = params.set('lastName', lastName);

    return this.http.get<Doctor[]>(`${base_Url}/search`, {
      params,
    });
  }
}
