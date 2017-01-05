module UsersAnswerHelper
  def total_answers(question)
  	question.users_answers.count
  end

  def total_this_answer(question, answer_id)
  	UsersAnswer.where_by_question_and_answer(question, answer_id).count
  end

  def ratio_answer(question, answer_id)
  	return '0%' if total_answers(question) == 0
  	"#{(total_this_answer(question, answer_id).to_f / total_answers(question)*100).round(2)}%"
  end
end
