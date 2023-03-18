import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'polisa',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  @Input() policy: any

  constructor(){}


  ngOnInit(): void {
  }

}
