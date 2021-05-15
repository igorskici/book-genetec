import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'keysPipe' })
export class KeysPipe implements PipeTransform {
    transform(value: any): any {
        return Object.keys(value);
    }
}

@Pipe({ name: 'stringBeautificationPipe', pure: false })
export class StringBeautificationPipe implements PipeTransform {

    transform(value: any, key: string) {
        switch (key) {
            case 'authors':
                const authors = value.split(',');
                authors.pop(authors.length);
                return authors.length === 1 ? authors[0] : authors.join(', ');
            case 'publishDate':
                return value.getMonth() + '/' + value.getDay() + '/' + value.getFullYear();
        }
        return value;
    }

}

@Pipe({ name: 'filteringPipe' })
export class FilteringPipe implements PipeTransform {
    transform(data: any, field: any, criteria: any): any {
        if (data === undefined || data.length === 0) {
            return data;
        }
        if (!field || !criteria) {
            return data;
        }
        return data.filter((x: any) => x[field].includes(criteria));
    }
}

@Pipe({ name: 'sortingPipe' })
export class SortingPipe implements PipeTransform {
    transform(data: any, field: any, criteria: any): any {
        if (data === undefined || data.length === 0) {
            return data;
        }
        if (!field || !criteria) {
            return data;
        }
        switch (typeof (data[0][field])) {
            case 'string':
                return data.sort((x: any, y: any) => x[field].localeCompare(y[field]));
            case 'number':
                return data.sort((x: any, y: any) => y[field] - x[field]);
            case 'object':
                // assuming it's a date
                return data.sort((x: any, y: any) => { 
                    return y[field].getTime() - x[field].getTime(); 
                });
        }
        return data;
    }
}

@Pipe({ name: 'pagingPipe', pure: false })
export class PagingPipe implements PipeTransform {
    // constructor(tableService: TableService) {
        // Todo: determine page size here and pass it back to component
    // }
    transform(data: any, paging: boolean, selectedPage: any, perPage = 2, pipeTrigger: number): any {
        if (!paging || data === undefined || data.length === 0) {
            return data;
        }
        
        return data.slice(selectedPage * perPage - perPage, selectedPage * perPage);
    }
}