# redux_saga

![Image result for redux saga"](https://avatars0.githubusercontent.com/u/24776643?s=400&v=4)

이 redux saga로 말씀드릴 것 같으면, 비동기 처리를 하기 쉬운 redux middleware 중 하나다.

redux_saga를 가장 잘 표현한 그림을 인용해 보자. 

![Image result for redux saga"](https://miro.medium.com/max/843/0*JhQmOmcPnbGhmiH7.png)

출처 : https://medium.com/@ravindermahajan/why-use-redux-saga-f3413a3f7e34

이 사진을 보게 되면, action이 dispatch를 일으키게 되는데, middleware 답게 Redux-saga를

거치고 reducer로 들어가는 것을 볼 수 있다.  그리고 api와 통신을 한 후에 effect를 넘긴다.

그러면 state가 변경되어 view Layer에 적용되는 것을 볼 수 있다.

그럼 "리액트를 다루는 기술(개정판)"에서 알려주는 코드를 확인해 보겠다.

그리고 redux_saga와 redux_thunk와 다른점은, redux_thunk는 callback을 이용해서 비동기를 처리한다면,

redux_saga는 제네레이터라는 것을 이용해서 비동기를 처리한다.



## Example

reducer and middleware

module/sample.js

```js
import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api'
import { startLoading, finishLoading } from './loading';
// 필요한 module import해오기

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';
const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILUER';
// action들을 정의해주기

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);
// redux-actions를 이용하기 때문에 dispatch는 createAction으로 한다.

function* getPostSaga(action) {
    try {
        const post = yield call(api.getPost, action.payload);
        // call은 promise를 반환하는 함수인데, 그 promise가 resolve될 때 까지 기다린다.
        // 첫번째 매개변수는 실행할 함수 두번째 매개변수는 그 함수에 들어갈 매개변수이다.
        yield put({
            type: GET_POST_SUCCESS,
            payload: post.data,
        });
        // put은 store에 dispatch를 보내는 녀석이다.
    } catch(e) {
        yield put({
            type: GET_POST_FAILURE,
            payload: e,
            error: true,
        });
    }
}

function* getUsersSaga() {
    try {
        const user = yield call(api.getUsers);
        yield put({
            type: GET_USERS_SUCCESS,
            payload: user.data,
        });
    } catch(e) {
        yield put({
            type: GET_USERS_FAILURE,
            payload: e,
            error: true,
        });
    }
}

export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}
// saga를 한 곳에 묶어주는 제네레이터임과 동시에 어떤 방식으로 실행할 건지 정해주는 부분
// takeLatest는 최근에 실행된 한번만 실행한다는 의미이다.

const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false,
    },
    post: null,
    users: null,
};

const sample = handleActions(
    {
        [GET_POST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: true,
            }
        }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload,
            loading: {
                ...state.loading,
                GET_POST: false,
            }
        }),
        [GET_USERS]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: true,
            }
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            users: action.payload,
            loading: {
                ...state.loading,
                GET_USERS: false,
            }
        })
    },
    initialState
);
// reducer

export default sample;
```

module/index.js

```js
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects'
import counter, { counterSaga } from './counter';
import sample, { sampleSaga } from './sample';
import loading from './loading'

const rootReducer = combineReducers({
    sample,
})
// reducer를 하나로 합치는 부분

export function* rootSaga(){
    yield all([sampleSaga()]);
};
// 여러개의 saga를 합치는 부분

export default rootReducer;
```



container/sampleContainer.js

```jsx
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    useEffect(() => {
        getPost(2);
        getUsers(1);
    }, [getPost, getUsers]);
    // state가 변경되어 함수가 다시 선언될 때 마다 다시 요청을 보내는 부분
    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
        // props로 정보들을 넘기는 부분
    );
};

export default connect(
    ({sample,loading}) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: loading.GET_POST,
        loadingUsers: loading.GET_USERS,
    }),
    {
        getPost,
        getUsers,
    }
)(SampleContainer);
```

app.js

```jsx
import React from 'react';
import SampleSagaContainer from './containers/SampleContainer'

function App() {
  return (
    <div className="App">
      <SampleSagaContainer/>
    </div>
  );
}

export default App;

```





index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer, { rootSaga } from './modules'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
// saga를 담을 곳을 만들어 주는 부분

const store = createStore
(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware)));
//middleware를 등록하는 부분이다. composeWithDevTools는 redux dev tool을 사용하기 위해서 쓴 부분이다.

sagaMiddleware.run(rootSaga)
// sagaMiddleware에 rootSaga를 등록하는 부분

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
```

