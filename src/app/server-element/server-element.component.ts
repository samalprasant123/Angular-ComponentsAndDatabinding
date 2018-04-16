import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None and Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};

  @Input() name;

  constructor() {
    console.log('In constructor()');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('In ngOnChanges()');
    console.log(changes);
  }

  ngOnInit() {
    console.log('In ngOnInit()');
  }

  ngDoCheck() {
    console.log('In ngDoCheck()');
  }

  ngAfterContentInit() {
    console.log('In ngAfterContentInit()');
  }

  ngAfterContentChecked() {
    console.log('In ngAfterContentChecked()');
  }

  ngAfterViewInit() {
    console.log('In ngAfterViewInit()');
  }

  ngAfterViewChecked() {
    console.log('In ngAfterViewChecked()');
  }

  ngOnDestroy() {
    console.log('In ngOnDestroy()');
  }

}
