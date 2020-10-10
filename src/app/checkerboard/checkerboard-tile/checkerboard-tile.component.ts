import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITileState } from '../models/tile-state';

@Component({
  selector: 'app-checkerboard-tile',
  templateUrl: './checkerboard-tile.component.html',
  styleUrls: ['./checkerboard-tile.component.scss']
})
export class CheckerboardTileComponent implements OnInit {

  public clickCount: number = 0;
  // State carrier;
  @Input("tile") tile:ITileState;

  // awaiting user input.
  @Input("hoverable") hoverable:boolean = false;
  public isHovering: boolean = false;
  @Output("pseudoClick") pseudoClick: EventEmitter<ITileState> = new EventEmitter<ITileState>();
  constructor() { }

  ngOnInit(): void {
  }

  public click(): void{
    this.pseudoClick.emit(this.tile);
    this.clickCount++;
  }
  public hovering(isso: boolean){
    this.isHovering = isso;
  }
}
