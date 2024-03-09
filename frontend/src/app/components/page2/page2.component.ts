import { Component, Input } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { SharedDataService } from '../../services/shared-data.service';
import { share } from 'rxjs';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
 
})


export class Page2Component {

  moveLeft = false;
  showSecondComponent = false;
  selectedGender: string = '';
  tulburare: string = '';
  selectedTerapie: string = '';
  selectedSedinta: string = '';
  selectedTarif: number = 0;
  terapeutRecomandat: string = '';
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
    ],
    "Tulburarea bipolara": [
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
    ],
    "Tulburarea de personalitate borderline (TPB)": [
      "Terapia dialectică comportamentală (DBT)",
      "Terapia cognitiv-comportamentală (TCC)",
      "Terapia prin acceptare și angajament (ACT)",
      "Terapia de grup",
      "Terapia cognitivă analitică (TCA)",
      "Terapia cognitivă",
      "Terapia prin biofeedback",
      "Terapia cognitivă bazată pe conștientizare (MBCT)",
      "Terapia de expunere virtuală",
      "Terapia prin joc de rol"
    ],
    "Tulburarea de personalitate histrionică (TPH)": [
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
    ],
    "Tulburarea de personalitate compulsivă-obsesivă (TPCO)": [
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
    ],
    "Tulburarea de personalitate dependentă (TPD)": [
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
    ],
    "Tulburarea de stres acut (TSA)": [
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
    ],
    "Anxietatea socială": [
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
    "Tulburarea obsesiv-compulsivă (TOC)": [
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
    "Schizofrenia": [
      "Terapia cognitiv-comportamentală (TCC)",
      "Terapia prin expunere",
      "Terapia cognitivă",
      "Terapia de grup",
      "Terapia cognitivă analitică (TCA)",
      "Terapia prin acceptare și angajament (ACT)",
      "Terapia cognitivă bazată pe conștientizare (MBCT)",
      "Terapia de expunere virtuală",
      "Terapia prin joc de rol",
      "Terapia prin biofeedback"
    ],
    "Tulburarea de alimentație compulsivă (TAC)": [
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
    ],
    "Tulburarea de stres post-traumatic (TSPT)": [
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
    ],
    "Tulburarea de control a furiei": [
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
    ],
    "Tulburarea de personalitate evitată (TPE)": [
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
    ],
    "Tulburarea de somatizare": [
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
    ],
    "Tulburarea de personalitate paranoidă (TPP)": [
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
    ],
    "Tulburarea de comerț compulsiv (TCC)": [
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
    
    this.sharedDataService.setTerapie(this.selectedTerapie);
    this.apiService.getTerapeut(this.tulburare, this.selectedTerapie, this.selectedGender, this.selectedSedinta, this.selectedTarif)
    .then(data => {
      this.terapeutRecomandat = data.Terapeutul_recomandat;
      this.moveLeft = true;
      this.showSecondComponent = true;
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
  }
  

}
