import { css, DefaultTheme, FlattenInterpolation, ThemeProps } from "styled-components"

export type CSS = FlattenInterpolation<ThemeProps<DefaultTheme>> | string | null

export type BreakpointSizeMap = { [k: string]: number } 

export interface HoverStyle {
  backgroundColor?: string
  borderColor?: string
  borderWeight?: string
  opacity?: number
  padding?: string
}

export interface FormFactor {
  mobile?: string
  tablet?: string
  desktop?: string
  ultra?: string | number
}

export enum BoxShadowType {
  LIGHT,
  MEDIUM,
  STRONG
}

export class ThemeUtil {

  static MAX_WIDTH = 1280

  static breakpointSize: BreakpointSizeMap = {
    ultra: ThemeUtil.MAX_WIDTH,
    desktop: 1024,
    tablet: 768,
    mobile: 480,
  }

  static responsiveProperty = (prop: string, value: FormFactor): CSS => css`

    ${prop}: ${value?.mobile ?? 'initial'};

    @media screen and (min-width: ${ThemeUtil.breakpointSize.tablet}px) {
      ${prop}: ${value?.tablet ?? value?.mobile ?? 'initial'};
    }

    @media screen and (min-width: ${ThemeUtil.breakpointSize.desktop}px) {
      ${prop}: ${value?.desktop ?? value?.tablet ?? value?.mobile ?? 'initial'};
    }

    @media screen and (min-width: ${ThemeUtil.breakpointSize.ultra}px) {
      ${prop}: ${value?.ultra ?? value?.desktop ?? value?.tablet ?? value?.mobile ?? 'initial'};
    }
  `
}