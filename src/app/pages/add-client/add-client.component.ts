import { Component } from '@angular/core';
import { AddClientService } from '../../services/add-client/add-client.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})

export class AddClientComponent {
  clientName: string = '';
  clientSurname: string = '';
  clientAge: number = 0;
  clientGender: string = '';

  responseRes: string = '';

  constructor(private addClientService: AddClientService) {}

  addNewClient() {
    if(this.clientName == '' || 
    this.clientSurname == '' || 
    this.clientAge == 0 || 
    this.clientGender == '') {
      this.responseRes = 'Fields are empty!';
    } else {
      this.addClientService.addClient(this.clientName, this.clientSurname, this.clientAge, this.clientGender)
      .subscribe((response) => {
        console.log('Response received: ', response);
        this.responseRes = 'Client added successfully!';
      }, (error) => {
        console.log('Response lost: ', error);
        this.responseRes = 'Client added successfully!';   
      });
    }
  }
}
