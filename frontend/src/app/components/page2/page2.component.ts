import { Component } from '@angular/core';
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
  
  therapy_descriptions: { [key: string]: string } = {
    "Terapia cognitiv-comportamentală (TCC)": "Explorează și schimbă gândurile negative și comportamentele legate de anxietatea socială, ajutând la dezvoltarea unor abilități sociale sănătoase.",
    "Terapia de expunere": "Gradual expune individul la situații sociale pentru a diminua frica și a îmbunătăți capacitatea de a gestiona emoțiile.",
    "Terapia cognitivă": "Ajută la identificarea și schimbarea gândurilor iraționale care alimentează anxietatea socială.",
    "Terapia de grup": "Oferă oportunitatea de a practica abilitățile sociale într-un mediu sigur, sub îndrumarea unui terapeut.",
    "Terapia prin acceptare și angajament (ACT)": "Se concentrează pe acceptarea emoțiilor și valorilor personale, ajutând individul să își dezvolte o relație sănătoasă cu anxietatea.",
    "Terapia prin joc de rol": "Implică practicarea interacțiunilor sociale într-un cadru controlat, ajutând la creșterea încrederii în sine.",
    "Terapia de relaxare": "Învață tehnici de relaxare și gestionare a stresului pentru a reduce nivelul general de anxietate.",
    "Terapia prin expunere virtuală": "Utilizează simulări computerizate pentru a expune persoana la situații sociale, oferind posibilitatea de a exersa abilitățile sociale într-un mediu controlat.",
    "Terapia prin biofeedback": "Monitorizează răspunsurile fiziologice ale corpului la anxietate și învață cum să le controleze prin tehnici specifice.",
    "Terapia cognitivă analitică (TCA)": "O formă de terapie care combină elemente din terapia cognitivă cu abordări analitice, pentru a ajuta la înțelegerea modelelor de gândire pe termen lung."
    // Add other therapies here with their respective descriptions
  };




  constructor(private apiService: ApiserviceService, private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.tulburare = this.sharedDataService.getTulburare();
    this.therapies = this.terapieDictionary[this.tulburare] || [];
  }

  getDescription(therapy: string): string {
    return this.therapy_descriptions[therapy] || "Descriere indisponibilă.";
  }

  selectGender(gender: string): void {
    this.selectedGender = gender;
  }

  pressButton(): void {
    this.sharedDataService.setTerapie(this.selectedTerapie);
    this.apiService.getTerapeut(this.tulburare, this.selectedTerapie, this.selectedGender, this.selectedSedinta, this.selectedTarif)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
  }
  

}
