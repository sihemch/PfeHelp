import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { publicationsService } from 'src/services/publication.services';
import { Publication } from '../publication';


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})

export class PublicationsComponent implements OnInit {
  publication:Publication = new Publication() 
pagePublications:any;
constructor (public publicationservice:publicationsService , public router: Router) { }

ngOnInit(): void {
}
savePublication(){
    this.publicationservice
    .addPublication(this.publication).subscribe(data=>{console.log(data);
      alert("mise à jour effectuée");
      this.router.navigate(['about'])},err=>{console.log(err);   alert('probléme')});
  }
}

