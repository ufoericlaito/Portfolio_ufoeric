import { createStore, combineReducers } from 'redux';

// 定义初始状态
const initialState = {
  user: null,
  theme: 'light'
};

// 示例 reducer
const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer
});

export const configureStore = () => createStore(rootReducer);