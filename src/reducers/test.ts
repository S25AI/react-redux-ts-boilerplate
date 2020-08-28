import { TEST_CHANGE_TEXT } from '../constants/test';

const initialState = {
  title: 'hello'
};

interface IAction {
  type: string,
  payload: any
}

function test(state = initialState, action: IAction) {
  switch (action.type) {
    case TEST_CHANGE_TEXT:
      return { ...state, title: action.payload };

    default:
      return state;
  }
}

export { test };
