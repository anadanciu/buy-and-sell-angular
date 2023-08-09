import { Injectable } from '@angular/core';
import { Listing } from './types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth, AuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth';

const httpOptions: Object = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const httpOptionsWithAuthToken = (token: string) => ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    AuthToken: token,
  }),
});

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  listings: Listing[] = [];
  auth: Auth;
  provider: AuthProvider;

  constructor(private http: HttpClient) {
    this.auth = getAuth();
    this.provider = new GoogleAuthProvider();
  }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}/add-view`,
      {},
      httpOptions
    );
  }

  getListingsForUser(): Observable<Listing[]> {
    return new Observable<Listing[]>((observer) => {
      this.auth.currentUser?.getIdToken().then((token) => {
        if (token) {
          this.http
            .get<Listing[]>(
              `/api/users/${this.auth.currentUser?.uid}/listings`,
              httpOptionsWithAuthToken(token)
            )
            .subscribe((listings) => {
              this.listings = listings;
              observer.next(listings);
            });
        } else {
          observer.next([]);
        }
      });
    });
  }

  deleteListing(id: string): Observable<any> {
    return new Observable<any>((observer) => {
      this.auth.currentUser?.getIdToken().then((token) => {
        this.http
          .delete(`/api/listings/${id}`, httpOptionsWithAuthToken(token))
          .subscribe(() => observer.next());
      });
    });
  }

  createListings(name: string, description: string, price: number) {
    return new Observable<Listing>((observer) => {
      if (this.auth.currentUser) {
        this.auth.currentUser.getIdToken().then((token) => {
          this.http
            .post<Listing>(
              '/api/listings',
              { name, description, price },
              httpOptionsWithAuthToken(token)
            )
            .subscribe(() => {
              observer.next();
            });
        });
      }
    });
  }

  editListing(
    id: string,
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    return new Observable<Listing>((observer) => {
      this.auth.currentUser?.getIdToken().then((token) => {
        this.http
          .post<Listing>(
            `/api/listings/${id}`,
            { name, description, price },
            httpOptionsWithAuthToken(token)
          )
          .subscribe(() => observer.next());
      });
    });
  }
}
