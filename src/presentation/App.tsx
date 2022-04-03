import { ThemeProvider } from "styled-components";
import { lighTheme } from "../resources";
import { AppContainer } from "./components";
import { SimulatorPage } from "./pages";

export default function ToyRobotApp(): JSX.Element {

  return (
    <ThemeProvider theme={ lighTheme }>
      <AppContainer>
        <SimulatorPage />
      </AppContainer>
    </ThemeProvider>
  )
}
