import styled from "styled-components"
import { ReactNode } from "react"
import { AlignItems, JustifyContent } from "./BaseContainer"
import { EdgeInsets } from "../../../resources"

const Container = styled.div<ColumnProps>`
  width: ${(props): string => props.width!};
  height: ${(props): string => props.height!};
  display: flex;
  flex-direction: column;
  align-items: ${(props): string => props.alignItems!};
  justify-content: ${(props): string => props.justifyContent!};
  gap: ${(props): string => props.gap!};
  padding: ${(props): string => props.padding!};
  margin: ${(props): string => props.margin!};
  background-color: ${(props): string | undefined =>
    props.backgroundColor
  };
  border-radius: ${(props): string | undefined =>
    props.borderRadius
  };
`

export interface ColumnProps {
  width?: string
  height?: string
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  gap?: string
  padding?: string
  margin?: string
  backgroundColor?: string
  borderRadius?: string
  children?: ReactNode
}

export function Column(props: ColumnProps = {
  width: 'auto',
  height: 'auto',
  alignItems: 'initial',
  justifyContent: 'initial',
  gap: '0',
  padding: EdgeInsets.all('0'),
  margin: EdgeInsets.all('0'),
  borderRadius: '0',
}): JSX.Element {

  return (
    <Container {...props} >
      { props.children }
    </Container>
  )
}