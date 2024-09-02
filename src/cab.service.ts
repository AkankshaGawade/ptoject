import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  private apiUrl = 'http://localhost:8081/cab';

  constructor(private http: HttpClient) { }

  getAllCabs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cabs`);
  }

  getCabByNo(cabNo: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${cabNo}`);
  }

  getCabsByPlace(place: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/place/${place}`);
  }

  getAvailableCabs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/available`);
  }

  getBookedCabs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/booked`);
  }

  createCab(cab: any): Observable<any> {
    return this.http.post(this.apiUrl, cab);
  }

  updateCab(cab: any): Observable<any> {
    return this.http.put(this.apiUrl, cab);
  }

  deleteCab(cabNo: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${cabNo}`);
  }

  bookCab(cabNo: number, numOfSeats: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/book/${cabNo}/${numOfSeats}`, {});
  }
}
