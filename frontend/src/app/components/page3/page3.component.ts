import { Component, TemplateRef } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { SharedDataService } from '../../services/shared-data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {

  constructor(private apiService: ApiserviceService, private sharedDataServices: SharedDataService, public dialog: MatDialog) { }

  selectedDisorderType: string = '';
  selectedTherapyType: string = '';
  tulburare: string = '';
  terapie: string = '';

  ngOnInit() {
    this.tulburare = this.sharedDataServices.getTulburare();
    this.terapie = this.sharedDataServices.getTerapie();
  }

  buttonPressed(templateRef: TemplateRef<any>): void {
    console.log(this.tulburare, this.terapie);
    this.apiService.calculateTime(this.selectedDisorderType, this.selectedTherapyType)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    this.openDialog(templateRef);
  }


    

  openDialog(templateRef: TemplateRef<any>) {

    const dialogConfig = new MatDialogConfig();

    // Customize dialog position
    dialogConfig.position = { 
      top: '-50vh', // Change this value to your preference
      left: '35vw' // Change this value to your preference
      // You can also use 'right' and 'bottom' properties
    };

    dialogConfig.width = '30vw'; // Example width in view width
  dialogConfig.height = '30vh';

    this.dialog.open(templateRef, dialogConfig);
  }
}




