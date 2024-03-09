import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private tulburare: string;
  private terapie: string;

  constructor() {
    this.tulburare = '';
    this.terapie = '';
  }

  setTerapie(value: string) {
    this.terapie = value;
  }
  getTerapie(): string {
    return this.terapie;
  }
  
  setTulburare(value: string) {
    this.tulburare = value;
  }

  getTulburare(): string {
    return this.tulburare;
  }
}
