import { useTheme } from "styled-components"
import { Column, Text } from "../../../components"
import { AppBarNav, BottomBarNav, TableGrid } from "../components"
import { useToy } from "../provider/Bill.provider"

export interface SimulatorContentProps {}

export function SimulatorContent({}: SimulatorContentProps): JSX.Element {

  const theme = useTheme()
  const { state: toyState, dispatch } = useToy()

  const position: string = toyState.initialized
    ? `(${toyState.position.x},${toyState.position.y},${toyState.position.direction})`
    : 'Enter a valid instruction to start'

  const _handleInstruction = (instruction: string): void => {
    try {
      dispatch(instruction)
    } catch (error: unknown) {
      console.log(error)
    }
  }

  return (
    <Column height='100%'>
      <AppBarNav />
      <Column
        justifyContent='space-evenly'
        alignItems='center'
        height='100%'
        backgroundColor={ theme.colorScheme.background }>
        <TableGrid />
        <Text
          text={ position }
          style={ theme.textTheme.titleMedium } />
      </Column>
      <BottomBarNav onSubmitInstruction={ _handleInstruction } />
    </Column>
  )
}