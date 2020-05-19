import { NavigationActions } from "react-navigation";

export const navigationService = {
  navigate,
  getCurrentRoute,
  setTopLevelNavigator
};

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function getCurrentRoute() {
  if (!_navigator || !_navigator.state.nav) {
    return null;
  }

  return _navigator.state.nav.routes[_navigator.state.nav.index] || null;
}
