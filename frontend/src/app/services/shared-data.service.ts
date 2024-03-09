import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private tulburare: string;
  private terapie: string;
  private terapeut: string;

  constructor() {
    this.tulburare = '';
    this.terapie = '';
    this.terapeut = '';
  }

  setTerapeut(value: string) {
    this.terapeut = value;
  }
  getTerapeut(): string {
    return this.terapeut;
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
