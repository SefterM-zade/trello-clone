import { TYPES } from './index'

export const addList = (title) => {
  return {
    type: TYPES.ADD_LIST,
    payload: title,
  }
}

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: TYPES.SORT_LIST,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type,
    },
  }
}
