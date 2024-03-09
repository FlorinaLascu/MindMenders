import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private tulburare: string;

  constructor() {
    this.tulburare = '';
  }

  setTulburare(value: string) {
    this.tulburare = value;
  }

  getTulburare(): string {
    return this.tulburare;
  }
}
