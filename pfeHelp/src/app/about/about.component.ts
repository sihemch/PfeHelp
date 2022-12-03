import { Component, OnInit } from '@angular/core';
import { publicationsService } from 'src/services/publication.services';
import { Publication } from '../publication';
import { HttpErrorResponse } from '@angular/common/http';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public publications! : Publication[];

  constructor(public publicationservice:publicationsService, public router: Router) { }

  ngOnInit(): void {
 this.getPublication();

  }

  public getPublication(): void{
    this.publicationservice.getPublications().subscribe(
      (response: Publication[])=>{
        this.publications=response;  },
        (error: HttpErrorResponse)=>{
          alert(error.message)
        }
    );
  }


 


  public onEdit(id: number){
    this.router.navigate(['editpub',id])
  }

  public onConsult(id: number){
    this.router.navigate(['consultpub',id])
  }



 public deletePub(pub:Publication){
    this.publicationservice.deletePublication(pub.id).subscribe(data=>{console.log('success');
    alert("suppression effectuée");
  this.router.navigate(['about'])} , err=>{console.log(err);
    alert('probléme')});
  }

 //public onDelete(pub : Publication){
  //  let confirm=window.confirm('Are you sure ?');
   //  if(confirm=true){this.publicationservice.deletePublication(pub.id).subscribe(data=>{
   //    console.log(data);
  //     this.getPublication();
 //    },
  //   error => console.log(error));}}
}
