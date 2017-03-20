// @flow
import { DATA_FETCHED, DATA_LOADING, DATA_ERROR } from '../actions'

type LoadingState = {
  status: string,
  isLoading: boolean
}

type LoadingAction = {
  type: string,
  data: ?[],
  content: ?string
}

export const LoaderState = (state: LoadingState, action: LoadingAction): LoadingState  => {
  switch (action.type) {
    case DATA_FETCHED:
      return {
        status: 'Done',
        data: action.data,
        content: action.content,
        isLoading: false
      }
    case DATA_LOADING:
      return {
        status: 'Loading...',
        data: undefined,
        content: action.content,
        isLoading: true
      }
    case DATA_ERROR:
      return { status:'Error',
        data: action.data,
        content: action.content,
        isLoading: false
      }
    default:
      return {
        status: 'Syncing data...',
        data: undefined,
        content: undefined,
        isLoading: true
      }
  }
}