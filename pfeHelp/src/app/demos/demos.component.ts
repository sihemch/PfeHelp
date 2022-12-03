import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { publicationsService } from 'src/services/publication.services';
import { Demo } from '../demo';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  public demos! : Demo[];
  constructor(public publicationservice:publicationsService, public router: Router) { }

  ngOnInit(): void {
    this.getDemo();
  }
  public getDemo(): void{
    this.publicationservice.getDemos().subscribe(
      (response: Demo[])=>{
        this.demos=response;  },
        (error: HttpErrorResponse)=>{
          alert(error.message)
        }
    );
  }


  public deleteDemo(demo:Demo){
    this.publicationservice.deleteDemo(demo.idD).subscribe(data=>{console.log('success');
    alert("suppression effectuée");
  this.router.navigate(['Demos'])} , err=>{console.log(err);
    alert('probléme')});
  }
  public onConsultD(idD: number){
    this.router.navigate(['consultdemo',idD])
  }
  
  public onEditD(idD: number){
    this.router.navigate(['editdemo',idD])
  }
}
