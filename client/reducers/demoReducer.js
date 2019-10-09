import {
  SIMPLE_ACTION1,
  SIMPLE_ACTION2

} from 'client/actions/demoActions';

const InitState = null;

export function stuff(state = InitState, action) {

  switch (action.type) {
    case SIMPLE_ACTION1:
      return action.payload ;

    default:
      return state;
  }
}

export function otherStuff(state = InitState, action) {

  switch (action.type) {
    case SIMPLE_ACTION2:
      return action.payload ;

    default:
      return state;
  }
}
