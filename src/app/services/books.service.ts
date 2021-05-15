import { Injectable } from '@angular/core';

const BOOKS_DATA = 'booksData';
const CHANGES_DATA = 'booksDataChangeLog';

const SAMPLE_DATA = [{
  id: 1,
  authors: 'John Roman,',
  title: 'Adventures of John',
  description: 'The adventures of John part I',
  publishDate: new Date("Sat May 15 2012 00:33:13 GMT+0300"),
},
{
  id: 2,
  authors: 'John Roman,',
  title: 'Adventures of John Pt. 2',
  description: 'The adventures of John part II',
  publishDate: new Date("Sat May 15 2014 00:33:13 GMT+0300"),
},
{
  id: 3,
  authors: 'Will Svenson,Cristopher Davids,',
  title: 'Political knowledge for dummies',
  description: 'A book that is intended to teach newcomers to politial sciences.',
  publishDate: new Date("Sat Feb 5 2010 00:33:13 GMT+0300"),
},
{
  id: 4,
  authors: 'Harrison Smith,Connard Legrand,',
  title: 'Trip to Goa',
  description: 'A travelogue for our joint trip to Goa',
  publishDate: new Date("Sat Sep 15 2012 00:33:13 GMT+0300"),
},
{
  id: 5,
  authors: 'Mia Roberts,',
  title: 'Math 102',
  description: 'Advanced maths book',
  publishDate: new Date("Sat Dec 25 2012 00:33:13 GMT+0300"),
}];

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() {
    if (!sessionStorage.getItem(BOOKS_DATA) || sessionStorage.getItem(BOOKS_DATA)?.length === 0) {
      sessionStorage.setItem(BOOKS_DATA, JSON.stringify(SAMPLE_DATA));
    }
  }

  public getBooksData(): any[] {
    const data = sessionStorage.getItem(BOOKS_DATA);
    return !!data ? JSON.parse(data) : [];
  }

  public getChanges(): any[] {
    const data = sessionStorage.getItem(CHANGES_DATA);
    return !!data ? JSON.parse(data) : [];
  }

}
