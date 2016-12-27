# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Question.create(user_id: 1, category_id: 1, title: "Trong những cách sau cáth nào có thể làm nhiễm điện cho một vật?", content: "1. Trong những cách sau cách nào có t?", lever_id: 1, points: 10, remain_points: 10)

Question.last.answers.create(user_id: 2, label: "A", content: "Cọ chiếc vỏ bút lên tóc; ", correct: true)
Question.last.answers.create(user_id: 2, label: "B", content: "Đặt một nhanh nhựa gần một vật đã nhiễm điện;", correct: false)
Question.last.answers.create(user_id: 2, label: "C", content: "Đặt một vật gần nguồn điện;", correct: false)
Question.last.answers.create(user_id: 2, label: "D", content: "Cho một vật tiếp xúc với viên pin.", correct: false)

Question.create(user_id: 1, category_id: 1, title: "Trong các hiện tượng sau, hiện tượng nào không liên quan đến nhiễm điện?", content: "Trong các hiện tượng sau, hiện tượng nào không liên quan đến nhiễm điện?", lever_id: 1, points: 10, remain_points: 10)

Question.last.answers.create(user_id: 2, label: "A", content: "Về mùa đông lược dính rất nhiều tóc khi chải đầu;", correct: false)
Question.last.answers.create(user_id: 2, label: "B", content: "Chim thường xù lông về mùa rét;", correct: true)
Question.last.answers.create(user_id: 2, label: "C", content: "Ôtô chở nhiên liệu thường thả một sợi dây xích kéo lê trên mặt đường;", correct: false)
Question.last.answers.create(user_id: 2, label: "D", content: "Sét giữa các đám mây.", correct: false)