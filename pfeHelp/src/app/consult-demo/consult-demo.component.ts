import { Component, OnInit } from '@angular/core';
import { Demo } from '../demo';
import { publicationsService } from 'src/services/publication.services';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-consult-demo',
  templateUrl: './consult-demo.component.html',
  styleUrls: ['./consult-demo.component.css']
})
export class ConsultDemoComponent implements OnInit {
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

}
