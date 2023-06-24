import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { Employee } from 'src/model/employee.model';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit{
  employees : Employee[] =[
    
    
  ];
  constructor(private applicationservice: ApplicationService ) {}
  ngOnInit():void{
   this.applicationservice.getallapplications()
   .subscribe({
    next:(employee) =>{
    this.employees=employee;
    },
    error:(response)=>{
      console.log(response);
    }
   })
  }

}
