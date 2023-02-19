import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-submit',
  templateUrl: './project-submit.component.html',
  styleUrls: ['./project-submit.component.css']
})
export class ProjectSubmitComponent implements OnInit {
  isSubmissionFaield = false
  property:any=[]
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  gotohome() {
    this.router.navigate(['welcome'])
  }


}
