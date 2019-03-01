import { combineEpics } from 'redux-observable';
import { map } from 'rxjs/operators';
import createEpic from '@/utils/createEpic';
import { FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS } from '@/actions/ActionTypes';
import { getArticles } from '@/service';

const fetchArticlesEpic = createEpic<any>(FETCH_ARTICLES, action =>
  getArticles(action.payload).pipe(
    map((response: Ajax.Response) => ({
      type: FETCH_ARTICLES_SUCCESS,
      payload: response.data
    }))
  )
);

export default combineEpics(fetchArticlesEpic);
