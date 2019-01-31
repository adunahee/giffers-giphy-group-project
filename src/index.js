import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

//for redux store
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//for sagas
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();

//root saga 
function* rootSaga() {
    yield takeEvery("FETCH_CATEGORIES", fetchCategories);
    yield takeEvery('ADD_FAVORITE', addFavorite );
    yield takeEvery("FETCH_GIPHY_RESULTS", fetchGiphyResults);
}

//fetchCatgories saga
function* fetchCategories() {
    try {
        const categories = yield axios.get('/api/category')
        yield put({ type: "SET_CATEGORIES", payload: categories.data })
    }
    catch (error) {
        yield console.log('error fetchingCategories', error);
    }
}

//fetchGiphyResults saga
function* fetchGiphyResults() {
    try {
        const giphyResults = yield axios.get('/api/results')
        yield put({ type: "FETCH_GIPHY_RESULTS", payload: giphyResults.data })
    } catch (error) {
        console.log('error in fetchGiphyResults', error)
    }
}

//addFavorite saga
function* addFavorite(action) {
    try{
        yield axios.post('/api/favorite', action.payload)
    }
    catch(error) {
        yield console.log('error in addFavorite saga', error);
    }
}
//setCategory saga

//fetchFavorites saga


//reducers
const giphyResults = (state = [], action) => {
    return state;
}

const favorites = (state = [], action) => {
    return state;
}

const categories = (state = [], action) => {
    return state;
}


const store = createStore(
    combineReducers({
        giphyResults,
        favorites,
        categories,
    }),
    applyMiddleware(
        logger,
        sagaMiddleware,
    )
)

sagaMiddleware.run(rootSaga);

//wraps app in provider so it can access store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
