import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  jobTitle:string = '';
  company:string;
  location:string; 
  id:number;
  salary:string; 
  type:string; 
  department:string; 
  found:boolean;
  n:number;
  jobList = [];
  image:string = 'https://credrev-prd.s3.amazonaws.com/gydMVKgM/1434735463icon.gif';
  constructor(private httpClient:HttpClient){  

    this.getProfile();

  }
 /* onNameKeyUp(event:any){
  //  this.name = event.target.value;
    //this.name =this.name.toLowerCase();
   // this.found = false;

// this.httpClient.get(`db.json?name=${this.name}`) 

   this.httpClient.get(`https://my-json-server.typicode.com/kan-ny/ajshrr/brand/?name=${this.name}`) 
   .subscribe(
      (data:any[]) => {
        if(data.length) {
        
          this.rating = data[0].rating; //data[0].rating is variable name from json
          this.type = data[0].type;  
          this.id = data[0].id;  
            //this.denre or this.rating is variable name declared in .ts
          this.found = true;
        }
      }
   )
  }*/
  getProfile(){
    
    this.httpClient.get(`https://my-json-server.typicode.com/kan-ny/ajshrr/jobs/`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.jobList = data;
          //n denotes number of jobs
          this.n=data.length;
            
            for(var i=0;i< this.n;i++){
          this.jobTitle = data[i].jobtitle;
          this.company = data[i].company;  
          this.id = data[i].id; 
          this.location= data[i].location;      
          this.type= data[i].type;      
          this.salary= data[i].salary;     
          this.department= data[i].department;      
          this.image=data[i].image;
          this.found = true;
              console.log(this.jobTitle, this.id, this.type, this.salary, this.department );
        }

        }
      }
    )
  }

  postProfile(){
    this.httpClient.post(`https://my-json-server.typicode.com/kan-ny/ajshrr/jobs/`,
      {
      		"id":5,
      "name":"newbalance",
        "year":"2001",
"rating":8,
        "type":"cycling"
      })
    .subscribe(
      (data:any) => {
        console.log(data.name, typeof(name));
      }
    )
  }

}