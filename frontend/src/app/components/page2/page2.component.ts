import { Component } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { SharedDataService } from '../../services/shared-data.service';
import { share } from 'rxjs';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  selectedGender: string = '';
  tulburare: string = '';
  selectedTerapie: string = '';
  selectedSedinta: string = '';
  selectedTarif: number = 0;  
  terapieDictionary: { [key: string]: string[] } = {
    "Depresia": [
      "Terapia prin biofeedback",
      "Terapia cognitiv-comportamentală (TCC)",
      "Terapia psihodinamică",
      "Terapia prin acceptare și angajament (ACT)",
      "Terapia de grup",
      "Terapia cognitivă",
      "Terapia de relaxare",
      "Terapia prin joc de rol",
      "Terapia prin expunere virtuală",
      "Terapia cognitivă analitică (TCA)"
    ],
    "Anxietatea socială": [
      // Similar array of therapies
    ],
    // Add other disorders and their therapies in a similar manner
    "Tulburarea obsesiv-compulsivă (TOC)": [
      // Similar array of therapies
    ],
    "Schizofrenia": [
      // Similar array of therapies
    ],
    "Fobia specifică": [
      "Terapia cognitiv-comportamentală (TCC)",
      "Terapia dialectică comportamentală (DBT)",
      "Terapia cognitivă",
      "Terapia de grup",
      "Terapia cognitivă analitică (TCA)",
      "Terapia prin acceptare și angajament (ACT)",
      "Terapia cognitivă bazată pe conștientizare (MBCT)",
      "Terapia de expunere virtuală",
      "Terapia prin joc de rol",
      "Terapia prin biofeedback"
    ]
    // Continue for each disorder listed in the Excel file
  };

  therapies: string[] = []; 

  constructor(private apiService: ApiserviceService, private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.tulburare = this.sharedDataService.getTulburare();
    this.therapies = this.terapieDictionary[this.tulburare] || [];
  }

  selectGender(gender: string): void {
    this.selectedGender = gender;
  }

  pressButton(): void {
    this.apiService.getTerapeut(this.tulburare, this.selectedTerapie, this.selectedGender, this.selectedSedinta, this.selectedTarif)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

}
