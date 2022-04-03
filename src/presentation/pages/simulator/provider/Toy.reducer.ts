import { DirectionEnum, Position, ToyState } from "./Toy.state"

enum ToyActionEnum {
  place = 'PLACE',
  move = 'MOVE',
  left = 'LEFT',
  right = 'RIGHT',
  report = 'REPORT',
}

const validDirections: DirectionEnum[] = [
  DirectionEnum.north,
  DirectionEnum.east,
  DirectionEnum.south,
  DirectionEnum.west,
]

export class ToyReducer {

  private _decodeAction = (action: string): string => {
    return action.split(' ')[0] ?? ''
  }

  private _decodePosition = (position: string | null): Position | null => {
    const array = position?.split(',') ?? []
    return array.length < 3 ? null : {
      x: parseInt(array[0]),
      y: parseInt(array[1]),
      direction: array[2],
    } as Position
  }

  private _handleMoveDirection = (state: ToyState): Position => {
    switch (state.position.direction) {
      case DirectionEnum.north:
        return {
          ...state.position,
          y: state.position.y < 4 ? state.position.y + 1 : state.position.y
        }
      case DirectionEnum.east:
        return {
          ...state.position,
          x: state.position.x < 4 ? state.position.x + 1 : state.position.x
        }
      case DirectionEnum.south:
        return {
          ...state.position,
          y: state.position.y > 0 ? state.position.y - 1 : state.position.y
        }
      case DirectionEnum.west:
        return {
          ...state.position,
          x: state.position.x > 0 ? state.position.x - 1 : state.position.x
        }
    }
  }

  private _handleRotate = (state: ToyState, direction: 'left' | 'right'): Position => {
    switch (state.position.direction) {
      case DirectionEnum.north:
        return {
          ...state.position,
          direction: direction === 'left' ? DirectionEnum.west : DirectionEnum.east
        }
      case DirectionEnum.east:
        return {
          ...state.position,
          direction: direction === 'left' ? DirectionEnum.north : DirectionEnum.south
        }
      case DirectionEnum.south:
        return {
          ...state.position,
          direction: direction === 'left' ? DirectionEnum.east : DirectionEnum.west
        }
      case DirectionEnum.west:
        return {
          ...state.position,
          direction: direction === 'left' ? DirectionEnum.south : DirectionEnum.north
        }
    }
  }

  private _validatePlacement = (newPosition: Position): boolean => {
    if (newPosition.x < 5 && newPosition.x >= 0 && newPosition.y < 5 && newPosition.y >= 0 && validDirections.includes(newPosition.direction)) {
      return true
    } else {
      return false
    }
  }

  private _handleMove = (state: ToyState): ToyState => {
    return state.copyWith({
      position: this._handleMoveDirection(state)
    })
  }


  private _handleLeft = (state: ToyState): ToyState => {
    return state.copyWith({
      position: this._handleRotate(state, 'left')
    })
  }


  private _handleRight = (state: ToyState): ToyState => {
    return state.copyWith({
      position: this._handleRotate(state, 'right')
    })
  }


  private _handleReport = (state: ToyState): ToyState => {
    console.log(`${state.position.x},${state.position.y},${state.position.direction}`)
    return state
  }

  private _handlePlace = (state: ToyState, positionLiteral: string | null): ToyState => {
    const position: Position | null = this._decodePosition(positionLiteral)
    if (position) {
      const placementValid = this._validatePlacement(position)
      return state.copyWith({
        initialized: state.initialized ? state.initialized : placementValid,
        position: placementValid ? position : state.position,
      })
    } else {
      return state
    }
  }

  public reduce = (state: ToyState, action: string): ToyState => {
    const decodedAction = this._decodeAction(action)
    if (decodedAction === ToyActionEnum.place) {
      return this._handlePlace(state, action.split(' ')[1])
    } else if (state.initialized) {
      switch (action) {
        case ToyActionEnum.place:
          return this._handlePlace(state, action.split(' ')[1])
        case ToyActionEnum.move:
          return this._handleMove(state)
        case ToyActionEnum.left:
          return this._handleLeft(state)
        case ToyActionEnum.right:
          return this._handleRight(state)
        case ToyActionEnum.report:
          return this._handleReport(state)
        default:
          return state
      }
    }
    return state
  }

}