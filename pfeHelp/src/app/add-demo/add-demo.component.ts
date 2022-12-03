import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { publicationsService } from 'src/services/publication.services';
import { Demo } from '../demo';

@Component({
  selector: 'app-add-demo',
  templateUrl: './add-demo.component.html',
  styleUrls: ['./add-demo.component.css']
})
export class AddDemoComponent implements OnInit {
  demo:Demo = new Demo() 
pageDemos:any;
  constructor(public publicationservice:publicationsService , public router: Router) { }

  ngOnInit(): void {
  }
  saveDemo(){
    this.publicationservice
    .addDemo(this.demo).subscribe(data=>{console.log(data);
      alert("mise à jour effectuée");
      this.router.navigate(['Demos'])},err=>{console.log(err);   alert('probléme')});
  }
}
