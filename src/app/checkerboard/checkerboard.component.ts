import { Component, OnInit } from '@angular/core';
import { ICheckerboard, ITileState, TileState } from './models/tile-state';

@Component({
  selector: 'app-checkerboard',
  templateUrl: './checkerboard.component.html',
  styleUrls: ['./checkerboard.component.scss']
})
export class CheckerboardComponent implements OnInit {

  public board: ICheckerboard = [[]];

  public playermovingpiece: -1 | 1 = -1;
  public selectedtile: TileState = null;
  constructor() { }
  // Even number.
  public boardDimensions = 8
  ngOnInit(): void {
    for(let j = 0; j < this.boardDimensions; j++){
      this.board[j] = [];
      for(let i = 0; i < this.boardDimensions; i++){

        this.board[j][i] = new TileState(i, j);
        this.board[j][i].init(0);
        this.trackClickedTiles[this.getTileId(this.board[j][i])] = 0;
      }
    }
    this.setYellow();
    this.setPurple();
  }

  trackClickedTiles: {[id: string]: number} = {};
  public get listTiles(){

    return Object.keys(this.trackClickedTiles).filter(tileid => this.trackClickedTiles[tileid] > 0).map(tileid => `${tileid} :: ${this.trackClickedTiles[tileid]}`);
  }
  public getTileId(tile: ITileState){
    return `${tile.i}-${tile.j}`;
  }


  public setYellow(){
    let i = -1;
    let j = 0;
    for(let piece = 1; piece <= ((this.boardDimensions / 2 ) - 1) * this.boardDimensions / 2; piece++){
      console.log("piece", piece);
      i += 2;

      if(i <= this.boardDimensions - 1){
        this.board[j][i].init(1);
      } else {
        j += 1;
        i = (i - this.boardDimensions + 1) === 2? 0: 1;
        console.log(i,j);
        if(j <= this.boardDimensions - 1){
          this.board[j][i].init(1);
        } else {
          // Went out of bounds;
          break;
        }
      }
    }
  }

  public setPurple(){
    let i = this.boardDimensions;
    let j = this.boardDimensions - 1;
    for(let piece = 1; piece <= ((this.boardDimensions / 2 ) - 1) * this.boardDimensions / 2; piece++){
      i -= 2;

      if(i >= 0){
        this.board[j][i].init(-1);
      } else {
        j -= 1;
        if(i === -2){

        }
        i = this.boardDimensions - 1 + ((i === -2)? 0: -1);
        if(j >= 0){
          this.board[j][i].init(-1);
        } else {
          // Went out of bounds;
          break;
        }
      }
    }
  }
  public winningMessage: string = '';
  public selectedTile(tile: TileState){
    this.trackClickedTiles[this.getTileId(tile)] += 1;
    if(!this.selectedtile && this.playermovingpiece === tile.state) this.selectedtile = tile;
    else if(tile.state !== this.playermovingpiece && this.selectedtile){
      if(!this.selectedtile.moveTile(tile, this.board)){
        this.playermovingpiece *= -1;
      }

      this.selectedtile = null;
    }
    if(TileState.getTileCount(-1, this.board) === 0){
      this.winningMessage = "Yellow Won!";
    }else if(TileState.getTileCount(1, this.board) === 0){
      this.winningMessage = "Purple Won!";
    }

  }



}
