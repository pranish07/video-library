import React, { createContext, useContext, useReducer } from "react";
import { categories, videos } from "../data";

export const AppContext = createContext();
const initialState = {
  categories: categories,
  playlists: [],
  watchLaterList: [],
  videos: videos,
  search: "",
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_DATA":
    case "CREATE_PLAYLIST":
    case "DELETE_PLAYLIST":
    case "ADD_VIDEO_TO_PLAYLIST":
    case "REMOVE_VIDEO_FROM_PlAYLIST":
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLaterList: state.watchLateList.filter(
          (video) => video?.id !== payload?.id
        ),
      };
    case "ADD_NOTE":
    case "UPDATE_NOTE":
    case "DELETE_NOTE":

    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initialState, reducerFunc);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
