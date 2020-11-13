export const SET_SELECTED_NAV = "SET_SELECTED_NAV";
export const TOGGLE_SMALL_SCREEN = "TOGGLE_SMALL_SCREEN";

export function handleSelectedNavLink(selectedNavLink) {
  return {
    type: SET_SELECTED_NAV,
    payload: selectedNavLink,
  };
}
