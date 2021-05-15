import { ChangeDetectorRef, Injectable } from '@angular/core';

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

const SAMPLE_CHANGES = [{ "id": 4, "field": "title", "newVal": "Trip to India", "event": "edit", "oldVal": "Trip to Goa", "timestamp": "2021-05-15T16:29:50.216Z" }, { "id": 4, "field": "description", "newVal": "A travelogue for our joint trip to India", "event": "edit", "oldVal": "A travelogue for our joint trip to Goa", "timestamp": "2021-05-15T16:30:06.467Z" }, { "id": 1, "field": "title", "newVal": "Adventures of John Pt.1", "event": "edit", "oldVal": "Adventures of John", "timestamp": "2021-05-15T16:30:14.640Z" }, { "id": 1, "field": "Not specified", "newVal": "Not specified", "event": "delete", "oldVal": "Not specified", "timestamp": "2021-05-15T16:30:19.579Z" }, { "id": 5, "field": "description", "newVal": "Advanced sociology book", "event": "edit", "oldVal": "Advanced maths book", "timestamp": "2021-05-15T16:30:28.004Z" }, { "id": 5, "field": "title", "newVal": "Sociology 102", "event": "edit", "oldVal": "Math 102", "timestamp": "2021-05-15T16:30:34.532Z" }, { "id": 5, "field": "title", "newVal": "Sociology 103", "event": "edit", "oldVal": "Sociology 102", "timestamp": "2021-05-15T16:31:00.739Z" }, { "id": 5, "field": "publishDate", "newVal": "2012-12-25", "event": "edit", "oldVal": "2012-12-24T21:33:13.000Z", "timestamp": "2021-05-15T16:31:13.508Z" }, { "id": 3, "field": "authors", "newVal": "Mecho Puh,Cristopher Davids,", "event": "edit", "oldVal": "Will Svenson,Cristopher Davids,", "timestamp": "2021-05-15T16:31:24.772Z" }, { "id": 2, "field": "description", "newVal": "The adventures of John part I", "event": "edit", "oldVal": "The adventures of John part II", "timestamp": "2021-05-15T16:34:15.460Z" }, { "id": 4, "field": "title", "newVal": "Trip to Goa", "event": "edit", "oldVal": "Trip to India", "timestamp": "2021-05-15T16:35:45.064Z" }, { "id": 4, "field": "title", "newVal": "Trip to Goa", "event": "edit", "oldVal": "Trip to India", "timestamp": "2021-05-15T16:35:52.815Z" }, { "id": 3, "field": "authors", "newVal": "Cristopher Davids,", "event": "edit", "oldVal": "Mecho Puh,Cristopher Davids,", "timestamp": "2021-05-15T16:38:47.544Z" }];

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

    if (!sessionStorage.getItem(CHANGES_DATA) || sessionStorage.getItem(CHANGES_DATA)?.length === 0) {
      sessionStorage.setItem(CHANGES_DATA, JSON.stringify(SAMPLE_CHANGES));
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
      const strictChange = {
        id: change.recordId,
        field: change.field || 'Not specified',
        newVal: change.newVal || 'Not specified',
        event: change.event,
        oldVal: oldValue || 'Not specified',
        timestamp: new Date()
      };
      this.editBooks(change);
      newChanges.push(strictChange);
    });
    this.editChanges(newChanges);
  }

  private editBooks(change: any) {
    let data = this.getBooksData();
    if (change.event === "edit") {
      data = data.map(x => x.id === change.recordId ? { ...x, [change.field]: change.newVal } : x);
    } else {
      data = data.filter(x => x.id !== change.recordId);
    }
    sessionStorage[BOOKS_DATA] = JSON.stringify(data);
  }

  private editChanges(newChanges: any) {
    let data = this.getChanges();
    data.push(...newChanges);
    sessionStorage[CHANGES_DATA] = JSON.stringify(data);
  }

}
