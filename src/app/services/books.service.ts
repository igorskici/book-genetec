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

export interface BookEntity {
  id: number,
  authors: string,
  title: string,
  description: string,
  publishDate: string
};

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private _booksData: any[] = [];
  private _changesData: any[] = [];

  constructor() {
    if (!sessionStorage.getItem(BOOKS_DATA) || sessionStorage.getItem(BOOKS_DATA)?.length === 0) {
      sessionStorage.setItem(BOOKS_DATA, JSON.stringify(SAMPLE_DATA));
    }
  }

  public getBooksData(): any[] {
    const sessionStorageData = sessionStorage.getItem(BOOKS_DATA);
    this._booksData = !!sessionStorageData ? JSON.parse(sessionStorageData) : [];
    return this._booksData;
  }

  public getBookEntity(id: number) {
    if (this._booksData.length === 0) {
      this._booksData = this.getBooksData();
    }
    return this._booksData.filter((x: BookEntity) => x.id === id);
  }

  public getChanges(): any[] {
    const sessionStorageChanges = sessionStorage.getItem(CHANGES_DATA);
    this._changesData = !!sessionStorageChanges ? JSON.parse(sessionStorageChanges) : []
    return this._changesData;
  }

  public alter(recordId: number, changes: any[]) {
    const newChanges: any[] = [];
    if (this._changesData.length === 0) {
      this._changesData = this.getChanges();
    }
    if (changes.length === 0) {
      return;
    }
    changes.forEach((change: any) => {
      const oldValue = this._booksData.filter(x => x.id === recordId)[0][change.field];
      this.editBooks(change);
      newChanges.push({...change, oldVal: oldValue});
    });
    this.editChanges(newChanges);
  }

  private editBooks(change: any) {
    let data = this.getBooksData();
    data = data.map(x => x.id === change.recordId ? {...x, [change.field]: change.newVal} : x);
    sessionStorage[BOOKS_DATA] = JSON.stringify(data);
  }

  private editChanges(newChanges: any) {
    let data = this.getChanges();
    data.push(...newChanges);
    sessionStorage[CHANGES_DATA] = JSON.stringify(data);
  }

}
