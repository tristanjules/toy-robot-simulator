import { If, Then } from "react-if"
import styled, { useTheme } from "styled-components"
import { Dimensions, EdgeInsets } from "../../../../resources"
import { BaseContainer, Column } from "../../../components"
import { useToy } from "../provider/Bill.provider"
import { DirectionEnum } from "../provider/Toy.state"

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
`

const GridTile = styled.div<{ active: boolean }>`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  border-radius: 4px;
  transition: 300ms all ease;
  background-color: ${(props): string | null => props.active
    ? props.theme.colorScheme.primary
    : null
  };
  border: ${(props): string => props.active
    ? `2px solid ${props.theme.colorScheme.onBackground}`
    : `1.5px solid ${props.theme.colorScheme.outline}`
  };
`

const Ship = styled.img<{ degrees: number }>`
  width: 32px;
  height: 32px;
  object-fit: contain;
  transition: 1s all ease;
  transform: ${(props): string => 
    `rotate(${props.degrees}deg)`
  };
`

export interface TableGridProps {}

export function TableGrid({}: TableGridProps): JSX.Element {

  const theme = useTheme()
  const { state: toyState } = useToy()
  const column: number[] = [0, 1, 2, 3, 4]
  const rows: number[][] = [
    column,
    column,
    column,
    column,
    column,
  ]

  const _getDegrees = (): number => {
    switch (toyState.position.direction) {
      case DirectionEnum.north:
        return 0
      case DirectionEnum.east:
        return 90
      case DirectionEnum.south:
        return 180
      case DirectionEnum.west:
        return 270
    }
  }

  const _isPosition = (x: number, y: number): boolean => {
    return x === toyState.position.x
        && y === toyState.position.y
        && toyState.initialized
  }

  let bound: number = 4

  return (
    <BaseContainer
      width='100%'
      maxWidth='500px'
      display='flex'
      flexDirection='column'
      padding={ EdgeInsets.all(Dimensions.regular) }
      gap='4px' >
      { rows.map((row: number[], index: number) => {
          const thisBound = bound--
          return (
            <RowContainer key={ `row_${index}` }>
              { row.map((tile: number) => {
                const active = _isPosition(tile, thisBound)
                return (
                  <GridTile active={ active } key={ `tile_${thisBound}_${tile}` }>
                    <If condition={ active }>
                      <Then>
                        <Ship
                          degrees={ _getDegrees() }
                          src='/public/images/ship.png' />
                      </Then>
                    </If>
                  </GridTile>
                )
              })}
            </RowContainer>
          )
        })}
    </BaseContainer>
  )
}