import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-d-and-d-submit',
  templateUrl: './d-and-d-submit.component.html',
  styleUrls: ['./d-and-d-submit.component.css']
})
export class DAndDSubmitComponent implements OnInit {
  isSubmissionFaield = false
  property:any=[]
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  gotohome() {
    this.router.navigate(['welcome'])
  }


}
