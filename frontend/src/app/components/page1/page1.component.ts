import { Component, Input, TemplateRef } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { MatDialog } from '@angular/material/dialog';

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
    this.dialog.open(templateRef);
  }
}
