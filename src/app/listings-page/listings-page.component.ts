import { Component, OnInit } from "@angular/core";
import { Listing } from "../types";
import { fakeListings } from "../fakedata";

@Component({
    selector: "<app-listings-page></app-listings-page>",  
    templateUrl: "./listings-page.component.html",
    styleUrls: ["./listings-page.component.scss"]
})
export class ListingsPageComponent implements OnInit {
    listings: Listing[] = [];

    constructor() { }

    ngOnInit() : void {
        this.listings = fakeListings;
    }
}