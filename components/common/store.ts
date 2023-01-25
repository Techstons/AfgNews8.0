// import { configureStore } from "@reduxjs/toolkit";

// interface State {
//   inputValue: string;
//   searchValue: string;
// }
// export type { State };

// const store = configureStore({
//   reducer: {
//     inputValue: (
//       state: State = { inputValue: "", searchValue: "" },
//       action
//     ) => {
//       if (action.type === "UPDATE_INPUT_VALUE") {
//         return {
//           ...state,
//           inputValue: action.payload,
//         };
//       }
//       if (action.type === "UPDATE_SEARCH_VALUE") {
//         return {
//           ...state,
//           searchValue: action.payload,
//         };
//       }
//       return state;
//     },
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
