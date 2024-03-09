import { Component, Input, TemplateRef } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

  tulburare: string = '';
  constructor(private apiService: ApiserviceService, public dialog: MatDialog) { }


  showDisorder(templateRef: TemplateRef<any>) {
    this.openDialog(templateRef);
    const textarea = document.getElementById("user_input_information") as HTMLTextAreaElement;
    const description = textarea.value;
    this.apiService.getDisorder(description)
    .then(data => {
      this.tulburare = data.tulburare_produsa;
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
