import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { publicationsService } from 'src/services/publication.services';
import { Demo } from '../demo';

@Component({
  selector: 'app-edit-demo',
  templateUrl: './edit-demo.component.html',
  styleUrls: ['./edit-demo.component.css']
})
export class EditDemoComponent implements OnInit {
  mode:number=1;
   demo:Demo= new Demo();
   idD:number;
  constructor(public activatedRoute: ActivatedRoute
    , public pubicationservice:publicationsService, public router: Router) { 
      this.idD=activatedRoute.snapshot.params['idD'];
    }

  ngOnInit(): void {
    this.pubicationservice.getDemo(this.idD).subscribe(data=>{this.demo=data;},(error:HttpErrorResponse)=>{alert(error.message)});
  }
  updateDemod(){
    this.pubicationservice.updateDemo(this.demo).subscribe(data=>{console.log(data);
    alert("mise à jour effectuée");
  this.router.navigate(['Demos'])} , err=>{console.log(err);
    alert('probléme')});
  }
}
