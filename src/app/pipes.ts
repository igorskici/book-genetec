import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'keysPipe' })
export class KeysPipe implements PipeTransform {
    transform(value: any): any {
        return Object.keys(value);
    }
}
