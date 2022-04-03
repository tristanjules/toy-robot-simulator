import { SimulatorContent } from "./content/Simulator.content"
import { ToyProvider } from "./provider/Bill.provider"

export interface SimulatorPageProps {}

export function SimulatorPage({}: SimulatorPageProps): JSX.Element {

  return (
    <ToyProvider>
      <SimulatorContent />
    </ToyProvider>
  )
}