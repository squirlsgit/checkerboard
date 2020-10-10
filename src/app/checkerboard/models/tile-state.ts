export type ICheckerboard = [ITileState[]];
export interface ITileState{
  reset?: () => void,
  state: 0 | -1 | 1,
  level: number,
  _direction:number,
  i: number,
  j: number,
  color?: string,
  init?: (state: 0 | -1 | 1) => void;
  set?: (t:ITileState) => void;
  extract?: () => ITileState;
}

export class TileState implements ITileState {
  public i:number;
  public j:number;


  /**
   * Integer greater than 0.
   * -1
   * @return [description]
   */
  public _direction: number;

  public get direction(): number {
    return Math.pow(-1, this._direction);
  }

  public get color(): string{
    if(this.state === -1){
      return 'purple';
    } else if (this.state === 1){
      return 'orange';
    } else return 'white';
  }
  public state: -1 | 0 | 1 = 0;

  /**
   * Integer greater than 0.
   * @return [description]
   */
  public level: number
  constructor(i: number, j:number){
    this.i = i; this.j = j;
  }
  public extract(): ITileState{
    return this;
  }
  public init(state: -1 | 0 | 1): void {
    if(state === -1){
      this._direction = 1;
    } else if(state === 1){
      this._direction = 2;
    }
    this.state = state;
    this.level = 0;
  }
  public levelUp():void{
    this.level++;
    this._direction++;
  }
  public set(tile:ITileState): void{

    this._direction = tile._direction;
    this.state = tile.state;
    this.level = tile.level;
  }

  public reset(): void{
    this.state = 0;
    this.level = 0;
    this._direction = 0;
  }

  public isTileConnected(tile: ITileState):boolean{
    console.log(tile.j, this.j, this.direction);
      // tile.i === this.i+1 || tile.i === this.i - 1 ,this.level, tile.j, this.j + this.direction,
      // (tile.i === this.i+1 || tile.i === this.i - 1 ) && (this.level > 0 || (this.j + this.direction === tile.j)));
    return (tile.i === this.i+1 || tile.i === this.i - 1 ) && (this.level > 0 || (this.j + this.direction === tile.j));
  }
  public allowedState(tile: ITileState, board: ICheckerboard): ITileState{

    if(tile.state === 0){
      return this.isTileConnected(tile)? tile: null;
    } else if (tile.state === -1*this.state){
      if(this.isTileConnected(tile)){

        let newi = 2 * tile.i - this.i;
        let newj = tile.j + this.direction;
        console.log(board[newj][newi]);
        if (!board[newj] || !board[newj][newi]) {
          return null;
        } else if(board[newj][newi].state === 0){
          tile.reset();
          return board[newj][newi];

        }
      } else return null;
    }
    return null;
  }

  public static getTileCount(state: number, board: ICheckerboard){
    let count = 0;
    for (let j = 0; j < board.length; j++){
        count += board[j].filter((tile: ITileState) => tile.state === state).length;
    }
    return count;
  }
  public moveTile(tile: ITileState, board: ICheckerboard): boolean{
    const blanks = TileState.getTileCount(0, board);
    console.log(blanks);
    const selectedTile = this.allowedState(tile, board);
    let movedapiece = selectedTile !== null;
    if(selectedTile !== null){

      if((this.direction === 1 && selectedTile.j === 7)|| (this.direction === -1 && selectedTile.j === 0))
        this.levelUp();

      selectedTile.set(this.extract());
      this.reset();
    }

    if(blanks !== TileState.getTileCount(0, board)) return true;
    else return !movedapiece;

  }

}
