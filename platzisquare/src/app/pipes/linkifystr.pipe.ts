import { Pipe, PipeTransform } from "@angular/core";
import Linkifystr from 'linkifyjs/string';

@Pipe({name:'linkifystr'})
export class LinkifystrPipe implements PipeTransform {
    transform(str : String) : String {
        return str ? Linkifystr(str, {tatget: '_system'}) : str;
    }
}