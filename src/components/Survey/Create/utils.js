import { generateId } from '../../../utills/utils';

export const getInitialValues = () => ({
  title: '',
  description: '',
  questions: [
    {
      type: '',
      questionText: '',
      options: '',
    },
  ],
});

export const prepareRequest = (values) => {
  const preparedQuestions = values.questions.map((question) => {
    const optionsArray =
      question.options !== '' ? question.options.split(', ') : null;
    return {
      questionId: generateId(),
      type: question.type,
      questionText: question.questionText,
      options:
        optionsArray && optionsArray.length
          ? optionsArray.map((item) => ({ key: item, value: generateId() }))
          : null,
    };
  });

  return {
    title: values.title,
    description: values.description,
    questions: preparedQuestions,
  };
};
