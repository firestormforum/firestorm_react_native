import { NavigationActions, StackActions, NavigationNavigateAction, NavigationComponent } from 'react-navigation'
import { ReactNode } from 'react'

type ConfigType = {
  navigator: React.Ref<ReactNode> | NavigationComponent
  dispatch: () => void
}

let config: ConfigType = { navigator: null, dispatch: () => null }

export function setNavigator (nav: React.Ref<ReactNode>): void {
  if (nav) {
    config.navigator = nav
  }
}

export function dispatch (action: NavigationNavigateAction) {
  if (config.navigator) {
    config.navigator.dispatch(action)
  }
}

export function navigate (routeName: string, params?: object) {
  if (config.navigator && routeName) {
    let action = NavigationActions.navigate({ routeName, params })
    config.navigator.dispatch(action)
  }
}

export function reset (routeName: string) {
  if (config.navigator && routeName) {
    const action = StackActions.reset({
      index: 0,
      actions: [ NavigationActions.navigate({ routeName }) ]
    })

    config.navigator.dispatch(action)
  }
}

export function goBack (params = {}) {
  if (config.navigator) {
    let action = NavigationActions.back(params)
    config.navigator.dispatch(action)
  }
}
