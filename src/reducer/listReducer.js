import { TYPES } from '../action'

const initialState = []

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_LIST:
      const listId = state.length - 1

      return [
        ...state,
        {
          id: `list-${listId + 1}`,
          title: action.payload,
          cards: [],
        },
      ]

    case TYPES.ADD_CARD:
      let list

      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.listId) {
          list = state[i]
          break
        }
      }

      const cardId = list.cards.length - 1

      const newCard = {
        id: `card-${action.payload.listId}-${cardId + 1}`,
        text: action.payload.text,
      }

      list.cards.push(newCard)

      let newState = []

      state.forEach((item) => {
        if (item.id === list.id) {
          newState.push(list)
        } else {
          newState.push(item)
        }
      })

      return newState

    case TYPES.SORT_LIST:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload

      const returnValue = [...state]

      if (type === 'list') {
        const list = returnValue.splice(droppableIndexStart, 1)
        returnValue.splice(droppableIndexEnd, 0, ...list)
        return returnValue
      }

      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id)
        const card = list.cards.splice(droppableIndexStart, 1)
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find((list) => droppableIdStart === list.id)
        const card = listStart.cards.splice(droppableIndexStart, 1)
        const listEnd = state.find((list) => droppableIdEnd === list.id)
        listEnd.cards.splice(droppableIndexEnd, 0, ...card)
      }

      return returnValue

    default:
      return state
  }
}

export default listReducer
