import ActionTypes from '../constants';

export const setEvent = event => ({
  type: ActionTypes.SET_EVENT,
  event
});

export const createEvent = eventInfo => ({
  type: ActionTypes.FILL_EVENT_INFORMATION,
  owner: eventInfo.owner,
  title: eventInfo.title,
  description: eventInfo.description,
  image: eventInfo.image,
});

export const addQuestion = (questionInfo, index) => ({
  type: ActionTypes.ADD_QUESTION,
  phrase: questionInfo.phrase,
  questionType: questionInfo.questionType,
  index,
});
