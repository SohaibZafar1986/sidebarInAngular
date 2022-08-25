import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sidebarNavCheckbox'
})
export class SidebarNavCheckboxPipe implements PipeTransform {

  transform(item: any, args?: any): any {
    const checkbox = item.type;
    const classes = {
      'pb-3': true,
      'd-flex': true,
      'align-items-center': true,
      'checkbox-text-col': true,
      'ps-3': true,
      [`${checkbox}`]: !!checkbox
    };
    return classes;
  }

}
