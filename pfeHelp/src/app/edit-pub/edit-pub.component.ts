import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { publicationsService } from 'src/services/publication.services';
import { Publication } from '../publication';

@Component({
  selector: 'app-edit-pub',
  templateUrl: './edit-pub.component.html',
  styleUrls: ['./edit-pub.component.css']
})
export class EditPubComponent implements OnInit {
   mode:number=1;
   publication:Publication= new Publication();
   idpub:number;
  constructor(public activatedRoute: ActivatedRoute
    , public pubicationservice:publicationsService, public router: Router) { 
    this.idpub=activatedRoute.snapshot.params['id'];
  }


  ngOnInit(): void {
    this.pubicationservice.getPublication(this.idpub).subscribe(data=>{this.publication=data;},(error:HttpErrorResponse)=>{alert(error.message)});}
  

  updatePub(){
    this.pubicationservice.updatePublication(this.publication).subscribe(data=>{console.log(data);
    alert("mise à jour effectuée");
  this.router.navigate(['about'])} , err=>{console.log(err);
    alert('probléme')});
  }


  

}
