import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TaxiDetailsService} from '../service/taxiDetails.service';
@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  

  constructor( ){}

  ngOnInit(): void {
  }

}
