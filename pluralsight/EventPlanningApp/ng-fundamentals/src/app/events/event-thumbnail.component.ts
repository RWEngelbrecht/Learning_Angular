import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    .green { color: #003300 !important; }
    .bold { font-weight: bold; }
  `]
})
export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
    /**
     *  OR can return string
     *  e.g.
     *  if (this.event && this.event.time === '8:00 am') {
     *    return 'green bold'   ||    return ['green', 'bold']
     *  } else {
     *    return ''     ||      []
     *  }
     */
  }
}
