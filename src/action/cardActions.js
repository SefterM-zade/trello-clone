import { TYPES } from '../action'

export const addCard = (listId, text) => {
  return {
    type: TYPES.ADD_CARD,
    payload: { text, listId },
  }
}
