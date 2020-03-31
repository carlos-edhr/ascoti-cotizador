import {
  GET_FRENTES_MUEBLES,
  GET_FRENTES_MUEBLE,
  DELETE_FRENTES_MUEBLE
} from "../actions/types";

const initialState = {
  frentes_muebles: [],
  frentes_mueble: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FRENTES_MUEBLES:
      return {
        ...state,
        frentes_muebles: action.payload
      };

    case GET_FRENTES_MUEBLE:
      return {
        ...state,
        frentes_mueble: action.payload
      };

    case DELETE_FRENTES_MUEBLE:
      return {
        ...state
        //expresion para cambiar el estado de manera dinamica despues de eliminar registro sin necesidad de hacer refresh
        // frentes_muebles: state.frentes_muebles.frentes_mueble.filter(
        //   frentes_muebles => frentes_muebles.frentes_mueble.Codigo !== action.payload
        // )
      };
    default:
      return state;
  }
}
