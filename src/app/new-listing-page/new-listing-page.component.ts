import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.scss']
})
export class NewListingPageComponent implements OnInit {

  constructor (
    private router: Router
  ) {}
  ngOnInit(): void {
    
  }
  onSubmit(): void {
    alert("create a new listing...");
    this.router.navigateByUrl("/new-listing");
  }
}
