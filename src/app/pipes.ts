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
        return data.filter((x: any) => x[field].includes(criteria));
    }
}