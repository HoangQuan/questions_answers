class Attr::UserAnswer

  attr_reader :answer_result, :correct_answer_label, :user_answered_label
  def initialize answer_result, correct_answer_label, user_answered_label
    @answer_result        = answer_result
    @correct_answer_label = correct_answer_label
    @user_answered_label  = user_answered_label
  end
end