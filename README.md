# books-archive

## Overview
This app intends to keep a track on books and show what changes have occurred.  
It is generated using the Angular CLI v12 and therefore uses Angular 12. Some components from the Angular Material library are used as well.   

## How to run
In order to run this app, clone the repo and run `npm install`. After the installation of the required node modules completes, run `npm run start`. It should start and open in your default browser on `localhost:4200`.

## Storage
This app uses `sessionStorage` to persist information about the books.

## Interaction
The first page that would show up is the screen where the changes would appear. It corresponds with _All Changes_. For convenience, a couple of mock changes are seeded when the app starts.   
Some data operations can be triggered. From the first page, one can toggle the switch buttons, enabling Filtering, Sorting, Grouping and Paging. By enabling a given data operation, an additional container with options is being shown.   
The second page is _All Books_. It displays information about all the books. From there, one can either change and delete entities.

## Light docs
To accomplish the data operations, a custom implementation of a table was used, namely `<custom-table>`. The datasource of the custom table would be taken through several pipes to eventually fulfil the data manipulations.   
The data source is `sessionStorage`, as already mentioned, which is fetched by `BooksService`.   
In order to edit the data, the app uses a `FormGroup` from `@angular/forms`.
