import { IColorScheme } from "."

export class AppColoursLight implements IColorScheme {

  private static _instance: AppColoursLight

  public static get instance(): AppColoursLight {
    if (!AppColoursLight._instance) {
      AppColoursLight._instance = new AppColoursLight()
    }
    return AppColoursLight._instance
  }

  primary: string = '#9CE7E1'
  onPrimary: string = '#FFFFFF'

  secondary: string = '#52489C'
  onSecondary: string = '#FFFFFF'

  error: string = '#F45B69'
  onError: string = '#FFFFFF'

  background: string = '#FFFFFF'
  onBackground: string = '#0A0A0B'

  surface: string = '#FFFFFF'
  onSurface: string = '#747481'

  surfaceVariant: string = '#F4F4F6'
  onSurfaceVariant: string = '#A9A9B1'

  outline: string = '#EAEAEC'
  
  appBarBackground: string = '#1A181B'

}