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

    yield takeEvery("FETCH_FAVORITES", fetchFavorites);

    yield takeEvery('ADD_FAVORITE', addFavorite);
    yield takeEvery("FETCH_GIPHY_RESULTS", fetchGiphyResults);
    yield takeEvery('DELETE_CATEGORY', deleteCategory);
    yield takeEvery('ADD_CATEGORY', addCategory);
    yield takeEvery('UPDATE_CATEGORY', updateCategory);
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
function* fetchGiphyResults(action) {
    try {
        const giphyResponse = yield axios.get(`/api/results/${action.payload}`);
        console.log(giphyResponse.data);
        const nextAction = { type: "GIPHY_RESULTS", payload: giphyResponse.data};
        yield put(nextAction);
    } catch (error) {
        console.log('error in fetchGiphyResults', error);
        alert('Problem with getting GIF in saga');
    }
}

//addFavorite saga
function* addFavorite(action) {
    try {
        yield axios.post('/api/favorite', action.payload)
    }
    catch (error) {
        yield console.log('error in addFavorite saga', error);
    }
}

//fetchFavorites saga
function* fetchFavorites() {
    try {
        const response = yield axios.get('/api/favorite');
        let newAction = { type: 'SET_FAVORITES', payload: response.data };
        yield put(newAction);
    } catch (error) {
        console.log('error in fetchFavorites', error);
        alert('something went wrong');
    }
}

//deleteCategory saga
function* deleteCategory(action) {
    try {
        yield axios.delete(`/api/category/${action.payload}`);
        yield put({ type: "FETCH_CATEGORIES" });
    }
    catch (error) {
        yield console.log('error deleteCategory saga', error);
    }
}

//addCategory saga
function* addCategory(action) {
    try {
        yield axios.post('/api/category', action.payload);
        yield put({ type: 'FETCH_CATEGORIES' });
    }
    catch (error) {
        yield console.log('error in addCategory saga', error);
    }
}

function* updateCategory(action) {
    try {
        yield axios.put('/api/category', action.payload);
        yield put({ type: 'FETCH_CATEGORIES' })
    }
    catch (error) {
        yield console.log('error updating category', error);
    }
}

//reducers
const giphyResults = (state = [], action) => {
    if (action.type === 'GIPHY_RESULTS') {
        return action.payload;
    }
    return state;
}

const favorites = (state = [], action) => {
    if (action.type === 'SET_FAVORITES') {
        return action.payload;
    }
    return state;
}

const categories = (state = [], action) => {
    if (action.type === 'SET_CATEGORIES') {
        return action.payload
    }
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
