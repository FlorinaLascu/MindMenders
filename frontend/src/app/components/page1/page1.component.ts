import { Component, Input, TemplateRef } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

  tulburare: string = '';
  constructor(private apiService: ApiserviceService, private sharedDataService: SharedDataService, public dialog: MatDialog) { }
  tulburariDictionary: { [key: string]: string } = {
    "Depresia": "Persistentă tristețe, pierderea interesului, scăderea energiei.",
    "Anxietatea socială": "Teamă excesivă de evaluare socială, izolare și evitare a interacțiunilor sociale.",
    "Tulburarea obsesiv-compulsivă (TOC)": "Gânduri intruzive și comportamente repetitive pentru a reduce anxietatea.",
    "Schizofrenia": "Gânduri dezorganizate, halucinații, lipsă de funcționare socială.",
    "Tulburarea bipolara": "Schimbări extreme între stări de manie și depresie.",
    "Tulburarea de personalitate borderline (TPB)": "Instabilitate emoțională, relații intense, teama de abandon.",
    "Tulburarea de alimentație compulsivă (TAC)": "Consum excesiv de alimente într-un scurt interval, pierdere de control.",
    "Tulburarea de stres post-traumatic (TSPT)": "Reexperimentarea evenimentelor traumatice, evitarea stimuli asociati.",
    "Tulburarea de panică": "Atacuri neașteptate de anxietate intensă, însoțite de simptome fizice.",
    "Tulburarea de deficit de atenție și hiperactivitate (TDAH)": "Distractibilitate, impulsivitate, hiperactivitate, dificultăți de concentrare.",
    "Tulburarea de personalitate antisocială (TPA)": "Lipsa remușcărilor, dispreț față de drepturile altora, comportament antisocial.",
    "Fobia socială": "Teamă excesivă de judecata altora, evitarea interacțiunilor sociale.",
    "Tulburarea de somnambulism": "Deambulare și activități complexe în timpul somnului.",
    "Tulburarea de anxietate generalizată (TAG)": "Preocupare constantă și excesivă, neliniște generalizată.",
    "Tulburarea de personalitate narcisistă (TPN)": "Ego exagerat, lipsă de empatie, nevoie de admirație constantă.",
    "Fobia specifică": "Teamă intensă și evitarea anumitor obiecte sau situații.",
    "Tulburarea de conversie": "Simptome fizice inexplicabile fără cauza medicală.",
    "Tulburarea de personalitate dependenta (TPD)": "Nevoia excesivă de a fi îngrijit și teama de a fi abandonat.",
    "Tulburarea de jocuri de noroc": "Impulsul repetat de a paria, pierdere de control.",
    "Tulburarea de personalitate schizoidă (TPS)": "Izolare socială, afectivitate redusă, preferința pentru singurătate.",
    "Tulburarea de control a furiei": "Episoade intense și incontrolabile de furie.",
    "Tulburarea de personalitate evitantă (TPE)": "Evitarea relațiilor sociale, hipersensibilitate la respingere.",
    "Tulburarea de somatizare": "Manifestări fizice recurente fără cauză medicală.",
    "Tulburarea de personalitate paranoidă (TPP)": "Distrust intens și suspiciune față de alții.",
    "Tulburarea de comerț compulsiv (TCC)": "Consum compulsiv de bunuri, dificultate în controlul impulsurilor.",
    "Tulburarea de personalitate histrionică (TPH)": "Caută atenție excesivă, emotivitate exagerată.",
    "Tulburarea de personalitate compulsivă-obsesivă (TPCO)": "Perfecționism excesiv, ordine și control exagerate.",
    "Tulburarea de stres acut (TSA)": "Simptome severe după un eveniment traumatizant."
  };


  showDisorder(templateRef: TemplateRef<any>) {
    this.openDialog(templateRef);
    const textarea = document.getElementById("user_input_information") as HTMLTextAreaElement;
    const description = textarea.value;
    this.apiService.getDisorder(description)
    .then(data => {
      this.tulburare = data.tulburare_produsa;
      this.sharedDataService.setTulburare(this.tulburare);
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  openDialog(templateRef: TemplateRef<any>) {

    const dialogConfig = new MatDialogConfig();

    // Customize dialog position
    dialogConfig.position = { 
      top: '-50vh', // Change this value to your preference
      left: '10vw' // Change this value to your preference
      // You can also use 'right' and 'bottom' properties
    };

    this.dialog.open(templateRef, dialogConfig);
  }
}
