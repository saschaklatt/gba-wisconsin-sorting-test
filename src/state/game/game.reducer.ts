import { Reducer, AnyAction } from "redux"
import { GameState, PlayCardPayload } from "./game.props"
import { initialState } from "./game.state"
import { PLAY_CARD } from "./game.actions"

const game: Reducer<GameState, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_CARD:
      return playCard(state, action.payload)
    default:
      return state
  }
}

const SCORE_WIN = 500
const SCORE_LOSE = -500

const playCard = (state: GameState, payload: PlayCardPayload): GameState => {
  const { avatarData, cardData, criteria } = payload
  const isCorrect = avatarData[criteria].id === cardData[criteria].id
  const cardIndex = state.cardIndex + 1
  const newCombo = isCorrect ? state.combo + 1 : 0
  const score = isCorrect ? state.score + SCORE_WIN : state.score + SCORE_LOSE
  const isCriteriaChange = newCombo >= 7
  const criteriaIndex = isCriteriaChange
    ? state.criteriaIndex + 1
    : state.criteriaIndex
  return {
    ...state,
    cardIndex,
    combo: isCriteriaChange ? 0 : newCombo,
    criteriaIndex,
    score,
  }
}

export default game
