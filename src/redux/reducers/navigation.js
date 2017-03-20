import { Stacks } from '../../navigators/RootStack'
/**
 * Initializes the state of the RootStackState Navigator to match the Redux state
 */
export const RootStackState = (state, action) => Stacks.router.getStateForAction(action, state)
