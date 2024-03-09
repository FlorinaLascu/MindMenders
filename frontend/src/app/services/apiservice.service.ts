import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  async getDisorder(description: string) {
    const url = 'http://127.0.0.1:5000/tulburare';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: description }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
  }

  // tulburare: string, terapie: string, gender: string, sedinta: string, tarif: number
  async getTerapeut() {
    const url = 'http://127.0.0.1:5000/predictie';
    const tulburare = 'Fobia specifică';
    const terapie = 'Terapia prin acceptare și angajament (ACT)';
    const gender = 'F';
    const sedinta = 'online';
    const tarif = 150;
    try {
        const response = await fetch(url,{
          method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              Tulburare: tulburare,
              Terapie: terapie,
              Gender: gender,
              Sedinta: sedinta,
              Tarif: tarif
            }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
  }

  async calculateTime(tulburare: string, terapie: string) {
    const url = 'http://127.0.0.1:5000/predictie_durata';
    try {
        const response = await fetch(url,{
          method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              Tulburare: tulburare,
              Terapie: terapie
            }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
  }

}
