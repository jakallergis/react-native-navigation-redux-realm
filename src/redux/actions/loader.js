// @flow
import { DATA_FETCHED, DATA_LOADING, DATA_ERROR } from './types'

type LoadingAction = {
  type: string,
  data: ?[{}],
  content: string
}

export const DataLoadStart = (content: string): LoadingAction => {
  return {
    type: DATA_LOADING,
    data: undefined,
    content
  }
}

export const DataLoadSuccess = (data: [{}], content: string): LoadingAction => {
  return {
    type: DATA_FETCHED,
    data,
    content
  }
}

export const DataLoadError = (error: Error, content: string): LoadingAction => {
  return {
    type: DATA_ERROR,
    data: undefined,
    error: error,
    content
  }
}

export const loadData = (url: string, content: string): Function => {
  return (dispatch: Dispatch): void => {
    fetch(url)
      .then(response => {
        dispatch(DataLoadStart(content))
        return response.json()
      })
      .then(json => {
        dispatch(DataLoadSuccess(json, content))
      })
      .catch(e => dispatch(DataLoadError(e, content)))
  }
}