import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

import { ActivatedRoute, Router } from '@angular/router';
import { publicationsService } from 'src/services/publication.services';
import { Publication } from '../publication';
@Component({
  selector: 'app-consult-pub',
  templateUrl: './consult-pub.component.html',
  styleUrls: ['./consult-pub.component.css']
})
export class ConsultPubComponent implements OnInit {
  mode:number=1;
  publication:Publication= new Publication();
  idpub:number;
 constructor(public activatedRoute: ActivatedRoute
   , public pubicationservice:publicationsService, public router: Router) { 
   this.idpub=activatedRoute.snapshot.params['id'];
 }




    ngOnInit(): void {
    this.pubicationservice.getPublication(this.idpub).subscribe(data=>{this.publication=data;},(error:HttpErrorResponse)=>{alert(error.message)});}
 


  //deletePub(p:Publication){
  //  this.pubicationservice.deletePublication(this.idpub).subscribe(data=>{console.log(data);
  //  alert("suppression effectuée");
 // this.router.navigate(['about'])} , err=>{console.log(err);
 //   alert('probléme')});
 // }
    }
