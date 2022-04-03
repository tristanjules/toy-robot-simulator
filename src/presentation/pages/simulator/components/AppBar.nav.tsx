import { useTheme } from "styled-components"
import { Dimensions, EdgeInsets } from "../../../../resources"
import { Row, Text } from "../../../components"

export interface AppBarNavProps {}

export function AppBarNav({}: AppBarNavProps): JSX.Element {

  const theme = useTheme()

  return (
    <Row
      width='100%'
      height='72px'
      alignItems='center'
      justifyContent='center'
      backgroundColor={ theme.colorScheme.appBarBackground }
      padding={ EdgeInsets.symmetric({
        horizontal: Dimensions.regular,
      }) }
    >
      <Text
        text='ToyRobot'
        style={ theme.textTheme.headlineSmall }
        color={ theme.colorScheme.onPrimary } />
    </Row>
  )
}