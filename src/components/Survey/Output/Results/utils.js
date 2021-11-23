import { QUESTIONS_TYPE } from '../../../../constants/survey';
import { generateId } from '../../../../utills/utils';

export const getColumns = (questions) => {
  const questionsColumns = questions.map((question) => ({
    field: question.questionId,
    headerName: question.questionText,
    width: 300,
    editable: false,
  }));

  return [
    {
      field: 'survey_id',
      headerName: 'Survey ID',
      width: 120,
      editable: false,
    },
    {
      field: 'created_at',
      headerName: 'Date Created',
      width: 150,
      editable: false,
    },
    ...questionsColumns,
  ];
};

export const getRows = (results) =>
  results.map((item) => {
    const questions = JSON.parse(item.result).map((result) => ({
      [result.questionId]:
        result.type === QUESTIONS_TYPE.FREE_TEXT
          ? result.answer
          : result.selectedOption.key,
    }));

    const parsedQuestions = questions.reduce(
      (obj, item) => Object.assign(obj, item),
      {},
    );

    return {
      id: generateId(),
      survey_id: item.survey_id,
      created_at: item.created_at,
      ...parsedQuestions,
    };
  });
