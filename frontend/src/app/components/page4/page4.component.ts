import { Component, Input } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrl: './page4.component.css'
})
export class Page4Component {
  @Input() terapeut!: string;

  nume: string = "";
  specializare: string = "";
  despreMine: string = "";
  email: string = "";
  telefon: string = "";
  photo: string = "";

  datePersoana: { [key: string]: { specializari: string[]; email: string; telefon: string, photo: string } } = {
    "Paul M. Lehrer": {
      "specializari": [
        "Terapia prin biofeedback"
      ],
      "email": "paulmlehrer@therapyexample.com",
      "telefon": "0770637469",
      "photo": "https://randomuser.me/api/portraits/men/0.jpg"
    },
    "Laura A. Smith": {
      "specializari": [
        "Terapia cognitiv-comportamentală (TCC)"
      ],
      "email": "lauraasmith@therapyexample.com",
      "telefon": "0770267437",
      "photo": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    "Michael J. Anderson": {
      "specializari": [
        "Terapia psihodinamică"
      ],
      "email": "michaeljanderson@therapyexample.com",
      "telefon": "0770725417",
      "photo": "https://randomuser.me/api/portraits/men/2.jpg"
    },
    "Sarah E. Johnson": {
      "specializari": [
        "Terapia prin acceptare și angajament (ACT)"
      ],
      "email": "sarahejohnson@therapyexample.com",
      "telefon": "0770514095",
      "photo": "https://randomuser.me/api/portraits/women/3.jpg"
    },
    "David M. Rodriguez": {
      "specializari": [
        "Terapia de grup"
      ],
      "email": "davidmrodriguez@therapyexample.com",
      "telefon": "0770809263",
      "photo": "https://randomuser.me/api/portraits/men/4.jpg"
    },
    "Emily K. Williams": {
      "specializari": [
        "Terapia cognitivă"
      ],
      "email": "emilykwilliams@therapyexample.com",
      "telefon": "0770824264",
      "photo": "https://randomuser.me/api/portraits/women/5.jpg"
    },
    "John R. Thompson": {
      "specializari": [
        "Terapia de relaxare"
      ],
      "email": "johnrthompson@therapyexample.com",
      "telefon": "0770861381",
      "photo": "https://randomuser.me/api/portraits/men/6.jpg"
    },
    "Jessica L. Davis": {
      "specializari": [
        "Terapia prin joc de rol"
      ],
      "email": "jessicaldavis@therapyexample.com",
      "telefon": "0770989413",
      "photo": "https://randomuser.me/api/portraits/women/7.jpg"
    },
    "Brian A. Martinez": {
      "specializari": [
        "Terapia prin expunere virtuală"
      ],
      "email": "brianamartinez@therapyexample.com",
      "telefon": "0770672031",
      "photo": "https://randomuser.me/api/portraits/men/8.jpg"
    },
    "Rachel S. Clark": {
      "specializari": [
        "Terapia cognitivă analitică (TCA)"
      ],
      "email": "rachelsclark@therapyexample.com",
      "telefon": "0770731559",
      "photo": "https://randomuser.me/api/portraits/women/9.jpg"
    },
    "Anna R. Lewis": {
      "specializari": [
        "Terapia prin biofeedback"
      ],
      "email": "annarlewis@therapyexample.com",
      "telefon": "0770351919",
      "photo": "https://randomuser.me/api/portraits/men/10.jpg"
    },
    "Robert M. Walker": {
      "specializari": [
        "Terapia cognitiv-comportamentală (TCC)"
      ],
      "email": "robertmwalker@therapyexample.com",
      "telefon": "0770376874",
      "photo": "https://randomuser.me/api/portraits/women/11.jpg"
    },
    "Julia E. Anderson": {
      "specializari": [
        "Terapia psihodinamică"
      ],
      "email": "juliaeanderson@therapyexample.com",
      "telefon": "0770147988",
      "photo": "https://randomuser.me/api/portraits/men/12.jpg"
    },
    "Daniel S. Taylor": {
      "specializari": [
        "Terapia prin acceptare și angajament (ACT)"
      ],
      "email": "danielstaylor@therapyexample.com",
      "telefon": "0770086870",
      "photo": "https://randomuser.me/api/portraits/women/13.jpg"
    },
    "Sophie L. Martinez": {
      "specializari": [
        "Terapia de grup"
      ],
      "email": "sophielmartinez@therapyexample.com",
      "telefon": "0770772072",
      "photo": "https://randomuser.me/api/portraits/men/14.jpg"
    },
    "David A. Rodriguez": {
      "specializari": [
        "Terapia cognitivă"
      ],
      "email": "davidarodriguez@therapyexample.com",
      "telefon": "0770204969",
      "photo": "https://randomuser.me/api/portraits/women/15.jpg"
    },
    "Emily K. Thompson": {
      "specializari": [
        "Terapia de relaxare"
      ],
      "email": "emilykthompson@therapyexample.com",
      "telefon": "0770868710",
      "photo": "https://randomuser.me/api/portraits/men/16.jpg"
    },
    "John R. Davis": {
      "specializari": [
        "Terapia prin joc de rol"
      ],
      "email": "johnrdavis@therapyexample.com",
      "telefon": "0770667427",
      "photo": "https://randomuser.me/api/portraits/women/17.jpg"
    },
    "Jessica S. Martinez": {
      "specializari": [
        "Terapia prin expunere virtuală"
      ],
      "email": "jessicasmartinez@therapyexample.com",
      "telefon": "0770520242",
      "photo": "https://randomuser.me/api/portraits/men/18.jpg"
    },
    "Brian A. Clark": {
      "specializari": [
        "Terapia cognitivă analitică (TCA)"
      ],
      "email": "brianaclark@therapyexample.com",
      "telefon": "0770049668",
      "photo": "https://randomuser.me/api/portraits/women/19.jpg"
    },
    "Liam M. Williams": {
      "specializari": [
        "Terapia prin biofeedback"
      ],
      "email": "liammwilliams@therapyexample.com",
      "telefon": "0770992603",
      "photo": "https://randomuser.me/api/portraits/men/20.jpg"
    },
    "Olivia R. Anderson": {
      "specializari": [
        "Terapia cognitiv-comportamentală (TCC)"
      ],
      "email": "oliviaranderson@therapyexample.com",
      "telefon": "0770346636",
      "photo": "https://randomuser.me/api/portraits/women/21.jpg"
    },
    "Ethan S. Taylor": {
      "specializari": [
        "Terapia psihodinamică"
      ],
      "email": "ethanstaylor@therapyexample.com",
      "telefon": "0770251984",
      "photo": "https://randomuser.me/api/portraits/men/22.jpg"
    },
    "Ava J. Rodriguez": {
      "specializari": [
        "Terapia prin acceptare și angajament (ACT)"
      ],
      "email": "avajrodriguez@therapyexample.com",
      "telefon": "0770539686",
      "photo": "https://randomuser.me/api/portraits/women/23.jpg"
    },
    "Noah A. Martinez": {
      "specializari": [
        "Terapia de grup"
      ],
      "email": "noahamartinez@therapyexample.com",
      "telefon": "0770008838",
      "photo": "https://randomuser.me/api/portraits/men/24.jpg"
    },
    "Sophia E. Thompson": {
      "specializari": [
        "Terapia cognitivă"
      ],
      "email": "sophiaethompson@therapyexample.com",
      "telefon": "0770265784",
      "photo": "https://randomuser.me/api/portraits/women/25.jpg"
    },
    "Logan R. Davis": {
      "specializari": [
        "Terapia de relaxare",
        "Terapia prin joc de rol",
        "Terapia prin biofeedback"
      ],
      "email": "loganrdavis@therapyexample.com",
      "telefon": "0770029757",
      "photo": "https://randomuser.me/api/portraits/men/26.jpg"
    },
    "Isabella S. Martinez": {
      "specializari": [
        "Terapia prin joc de rol"
      ],
      "email": "isabellasmartinez@therapyexample.com",
      "telefon": "0770830093",
      "photo": "https://randomuser.me/api/portraits/women/27.jpg"
    },
    "Jackson A. Clark": {
      "specializari": [
        "Terapia prin expunere virtuală"
      ],
      "email": "jacksonaclark@therapyexample.com",
      "telefon": "0770612040",
      "photo": "https://randomuser.me/api/portraits/men/28.jpg"
    },
    "Nora R. Williams": {
      "specializari": [
        "Terapia cognitivă analitică (TCA)"
      ],
      "email": "norarwilliams@therapyexample.com",
      "telefon": "0770700115",
      "photo": "https://randomuser.me/api/portraits/women/29.jpg"
    },
    "Alex M. Johnson": {
      "specializari": [
        "Terapia cognitiv-comportamentală (TCC)"
      ],
      "email": "alexmjohnson@therapyexample.com",
      "telefon": "0770640021",
      "photo": "https://randomuser.me/api/portraits/men/30.jpg"
    },
    "Emma R. Davis": {
      "specializari": [
        "Terapia prin expunere"
      ],
      "email": "emmardavis@therapyexample.com",
      "telefon": "0770495636",
      "photo": "https://randomuser.me/api/portraits/women/31.jpg"
    },
    "Daniel L. Smith": {
      "specializari": [
        "Terapia cognitivă"
      ],
      "email": "daniellsmith@therapyexample.com",
      "telefon": "0770705743",
      "photo": "https://randomuser.me/api/portraits/men/32.jpg"
    },
    "Sophia K. Turner": {
      "specializari": [
        "Terapia de grup"
      ],
      "email": "sophiakturner@therapyexample.com",
      "telefon": "0770155085",
      "photo": "https://randomuser.me/api/portraits/women/33.jpg"
    },
    "Nathan A. Anderson": {
      "specializari": [
        "Terapia cognitivă analitică (TCA)"
      ],
      "email": "nathanaanderson@therapyexample.com",
      "telefon": "0770233292",
      "photo": "https://randomuser.me/api/portraits/men/34.jpg"
    },
    "Lily R. Martinez": {
      "specializari": [
        "Terapia prin acceptare și angajament (ACT)"
      ],
      "email": "lilyrmartinez@therapyexample.com",
      "telefon": "0770236380",
      "photo": "https://randomuser.me/api/portraits/women/35.jpg"
    },
    "Owen K. Thompson": {
      "specializari": [
        "Terapia cognitivă bazată pe conștientizare (MBCT)"
      ],
      "email": "owenkthompson@therapyexample.com",
      "telefon": "0770761708",
      "photo": "https://randomuser.me/api/portraits/men/36.jpg"
    },
    "Emily S. Clark": {
      "specializari": [
        "Terapia de expunere virtuală"
      ],
      "email": "emilysclark@therapyexample.com",
      "telefon": "0770816926",
      "photo": "https://randomuser.me/api/portraits/women/37.jpg"
    },
    "Ava J. Anderson": {
      "specializari": [
        "Terapia prin biofeedback",
        "Terapia de relaxare",
        "Terapia cognitivă analitică (TCA)"
      ],
      "email": "avajanderson@therapyexample.com",
      "telefon": "0770983010",
      "photo": "https://randomuser.me/api/portraits/men/38.jpg"
    },
    "Aiden M. Johnson": {
      "specializari": [
        "Terapia cognitiv-comportamentală (TCC)",
        "Terapia dialectică comportamentală (DBT)"
      ],
      "email": "aidenmjohnson@therapyexample.com",
      "telefon": "0770446882",
      "photo": "https://randomuser.me/api/portraits/women/39.jpg"
    },
    "Sophia L. Anderson": {
      "specializari": [
        "Terapia dialectică comportamentală (DBT)",
        "Terapia cognitiv-comportamentală (TCC)"
      ],
      "email": "sophialanderson@therapyexample.com",
      "telefon": "0770223757",
      "photo": "https://randomuser.me/api/portraits/men/40.jpg"
    },
    "Nathan L. Smith": {
      "specializari": [
        "Terapia cognitivă",
        "Terapia prin acceptare și angajament (ACT)"
      ],
      "email": "nathanlsmith@therapyexample.com",
      "telefon": "0770073073",
      "photo": "https://randomuser.me/api/portraits/women/41.jpg"
    },
    "Emma K. Turner": {
      "specializari": [
        "Terapia de grup"
      ],
      "email": "emmakturner@therapyexample.com",
      "telefon": "0770573282",
      "photo": "https://randomuser.me/api/portraits/men/42.jpg"
    },
    "Liam A. Anderson": {
      "specializari": [
        "Terapia cognitivă analitică (TCA)"
      ],
      "email": "liamaanderson@therapyexample.com",
      "telefon": "0770811152",
      "photo": "https://randomuser.me/api/portraits/women/43.jpg"
    },
    "Ava R. Martinez": {
      "specializari": [
        "Terapia prin acceptare și angajament (ACT)",
        "Terapia de expunere virtuală"
      ],
      "email": "avarmartinez@therapyexample.com",
      "telefon": "0770830304",
      "photo": "https://randomuser.me/api/portraits/men/44.jpg"
    },
    "Lily S. Clark": {
      "specializari": [
        "Terapia de expunere virtuală",
        "Terapia prin joc de rol"
      ],
      "email": "lilysclark@therapyexample.com",
      "telefon": "0770377620",
      "photo": "https://randomuser.me/api/portraits/women/45.jpg"
    },
    "Eva M. Johnson": {
      "specializari": [
        "Terapia cognitiv-comportamentală (TCC)"
      ],
      "email": "evamjohnson@therapyexample.com",
      "telefon": "0770025655",
      "photo": "https://randomuser.me/api/portraits/men/46.jpg"
    },
    "Noah L. Anderson": {
      "specializari": [
        "Terapia dialectică comportamentală (DBT)"
      ],
      "email": "noahlanderson@therapyexample.com",
      "telefon": "0770525714",
      "photo": "https://randomuser.me/api/portraits/women/47.jpg"
    },
    "Sophia R. Smith": {
      "specializari": [
        "Terapia cognitivă"
      ],
      "email": "sophiarsmith@therapyexample.com",
      "telefon": "0770004232",
      "photo": "https://randomuser.me/api/portraits/men/48.jpg"
    },
    "Nathan K. Turner": {
      "specializari": [
        "Terapia de grup"
      ],
      "email": "nathankturner@therapyexample.com",
      "telefon": "0770004528",
      "photo": "https://randomuser.me/api/portraits/women/49.jpg"
    },
    "Emma A. Anderson": {
      "specializari": [
        "Terapia cognitivă analitică (TCA)"
      ],
      "email": "emmaaanderson@therapyexample.com",
      "telefon": "0770470420",
      "photo": "https://randomuser.me/api/portraits/men/50.jpg"
    },
    "Liam R. Martinez": {
      "specializari": [
        "Terapia prin acceptare și angajament (ACT)"
      ],
      "email": "liamrmartinez@therapyexample.com",
      "telefon": "0770346021",
      "photo": "https://randomuser.me/api/portraits/women/51.jpg"
    },
    "Ava K. Thompson": {
      "specializari": [
        "Terapia cognitivă bazată pe conștientizare (MBCT)"
      ],
      "email": "avakthompson@therapyexample.com",
      "telefon": "0770895927",
      "photo": "https://randomuser.me/api/portraits/men/52.jpg"
    },
    "Owen S. Clark": {
      "specializari": [
        "Terapia de expunere virtuală"
      ],
      "email": "owensclark@therapyexample.com",
      "telefon": "0770715619",
      "photo": "https://randomuser.me/api/portraits/women/53.jpg"
    },
    "Lily J. Davis": {
      "specializari": [
        "Terapia prin joc de rol"
      ],
      "email": "lilyjdavis@therapyexample.com",
      "telefon": "0770190708",
      "photo": "https://randomuser.me/api/portraits/men/54.jpg"
    },
    "Logan R. Anderson": {
      "specializari": [
        "Terapia prin biofeedback"
      ],
      "email": "loganranderson@therapyexample.com",
      "telefon": "0770569692",
      "photo": "https://randomuser.me/api/portraits/women/55.jpg"
    },
    "Sophie M. Johnson": {
      "specializari": [
        "Terapia cognitiv-comportamentală (TCC)"
      ],
      "email": "sophiemjohnson@therapyexample.com",
      "telefon": "0770187968",
      "photo": "https://randomuser.me/api/portraits/men/56.jpg"
    },
    "Nathan L. Anderson": {
      "specializari": [
        "Terapia dialectică comportamentală (DBT)"
      ],
      "email": "nathanlanderson@therapyexample.com",
      "telefon": "0770330726",
      "photo": "https://randomuser.me/api/portraits/women/57.jpg"
    },
    "Emma R. Smith": {
      "specializari": [
        "Terapia cognitivă"
      ],
      "email": "emmarsmith@therapyexample.com",
      "telefon": "0770116528",
      "photo": "https://randomuser.me/api/portraits/men/58.jpg"
    },
    "Logan K. Turner": {
      "specializari": [
        "Terapia de grup",
        "Terapia prin biofeedback"
      ],
      "email": "logankturner@therapyexample.com",
      "telefon": "0770959950",
      "photo": "https://randomuser.me/api/portraits/women/59.jpg"
    },
    "Ava A. Anderson": {
      "specializari": [
        "Terapia cognitivă analitică (TCA)"
      ],
      "email": "avaaanderson@therapyexample.com",
      "telefon": "0770395540",
      "photo": "https://randomuser.me/api/portraits/men/60.jpg"
    },
    "Olivia A. Miller": {
      "specializari": [
        "Terapia cognitiv-comportamentală (TCC)",
        "Terapia cognit-comportamentală (TCC)"
      ],
      "email": "oliviaamiller@therapyexample.com",
      "telefon": "0770744635",
      "photo": "https://randomuser.me/api/portraits/women/61.jpg"
    },
    "Ethan R. Martinez": {
      "specializari": [
        "Terapia dialectică comportamentală (DBT)"
      ],
      "email": "ethanrmartinez@therapyexample.com",
      "telefon": "0770326731",
      "photo": "https://randomuser.me/api/portraits/men/62.jpg"
    },
    "Natalie S. Clark": {
      "specializari": [
        "Terapia cognitivă"
      ],
      "email": "nataliesclark@therapyexample.com",
      "telefon": "0770920729",
      "photo": "https://randomuser.me/api/portraits/women/63.jpg"
    },
    "Eli K. Turner": {
      "specializari": [
        "Terapia de grup"
      ],
      "email": "elikturner@therapyexample.com",
      "telefon": "0770694946",
      "photo": "https://randomuser.me/api/portraits/men/64.jpg"
    },
    "Mason L. Thompson": {
      "specializari": [
        "Terapia prin acceptare și angajament (ACT)"
      ],
      "email": "masonlthompson@therapyexample.com",
      "telefon": "0770840990",
      "photo": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    "Zoe K. Clark": {
      "specializari": [
        "Terapia cognitivă bazată pe conștientizare (MBCT)"
      ],
      "email": "zoekclark@therapyexample.com",
      "telefon": "0770158740",
      "photo": "https://randomuser.me/api/portraits/men/66.jpg"
    },
    "Benjamin S. Davis": {
      "specializari": [
        "Terapia de expunere virtuală"
      ],
      "email": "benjaminsdavis@therapyexample.com",
      "telefon": "0770645629",
      "photo": "https://randomuser.me/api/portraits/women/67.jpg"
    },
    "Lily M. Anderson": {
      "specializari": [
        "Terapia prin joc de rol"
      ],
      "email": "lilymanderson@therapyexample.com",
      "telefon": "0770245840",
      "photo": "https://randomuser.me/api/portraits/men/68.jpg"
    }
  }
    
  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.nume = this.terapeut;
    this.specializare = this.datePersoana[this.terapeut].specializari.join(", ");
    this.email = this.datePersoana[this.terapeut].email;
    this.telefon = this.datePersoana[this.terapeut].telefon;
    this.photo = this.datePersoana[this.terapeut].photo;
  }


}
