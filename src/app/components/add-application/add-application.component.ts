import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { Employee } from 'src/model/employee.model';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent implements OnInit {
addapprequest : Employee ={
  C_Id: '',
  C_Name: '',
  Application_Name: '',
  Serverinfo: '',
  Portinfo: ''
};
constructor(private  applicationservice : ApplicationService){}
ngOnInit():void{}
addapplication(){
  this.applicationservice.addapplication(this.addapprequest)
  .subscribe({
    next:(employee)=>{
      console.log(employee);
    }
  });
}
}
