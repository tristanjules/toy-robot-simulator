import { createContext, ReactNode, useContext, useReducer } from "react"
import { ToyReducer } from "./Toy.reducer"
import { ToyState } from "./Toy.state"

export const ToyStateContext = createContext<{ 
  state: ToyState,
  dispatch: (action: string) => void ,
} | undefined> (undefined)

export interface ToyProviderProps {
  children?: ReactNode
}

export function ToyProvider({ children }: ToyProviderProps): JSX.Element {

  const toyState: ToyState = new ToyState({})

  const toyReducer = new ToyReducer()
  const [state, dispatch] = useReducer(toyReducer.reduce, toyState)
  const value = { state, dispatch }

  return (
    <ToyStateContext.Provider value={ value }>
      { children }
    </ToyStateContext.Provider>
  )
}

export function useToy() {
  const context = useContext(ToyStateContext)
  if (context === undefined) {
    throw new Error('useToy must be used within a ToyProvider')
  }
  return context
}