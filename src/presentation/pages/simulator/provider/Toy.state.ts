export enum DirectionEnum {
  north = 'NORTH',
  east = 'EAST',
  south = 'SOUTH',
  west = 'WEST',
}

export interface Position {
  x: number
  y: number
  direction: DirectionEnum
}

export interface IToyState {
  initialized?: boolean
  position?: Position
}

export class ToyState implements IToyState {

  constructor(input: IToyState) {
    this.initialized = input.initialized ?? false,
    this.position = input.position ?? {
      x: 0,
      y: 0,
      direction: DirectionEnum.north
    }
  }

  public initialized: boolean
  public position: Position

  public copyWith = (input: IToyState): ToyState => {
    return new ToyState({
      initialized: input.initialized ?? this.initialized,
      position: input.position ?? this.position,
    })
  }
}