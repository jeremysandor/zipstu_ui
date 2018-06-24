import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import Cookies from 'universal-cookie';

import { SIGN_UP } from './constants'
import { makeSelectEmail, makeSelectPassword } from './selectors'

// auth
import { Auth } from 'aws-amplify';

export function* signup() {
  const email    = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const username = email;

  console.log('EMAIL?', email);
  console.log('PW?', password);

  Auth.signUp({
        username,
        password,
        attributes: {
            email,          // optional
        },
        validationData: []  //optional
    })
    .then(
        (data) => {
          console.log(data);
          const cookies = new Cookies();
          const accessToken = data.signInUserSession.accessToken.jwtToken;
          cookies.set('access_token', accessToken, { path: '/' });
          console.log(cookies.get('access_token'));
        }
      )
    .catch(
        err => console.log(err)
      );  
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SIGN_UP, signup);
}
