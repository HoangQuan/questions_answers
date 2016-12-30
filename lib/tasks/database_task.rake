namespace :db do
  desc 'Database task'

  task recreate: :environment do
    cmd = 'rake db:drop db:create db:migrate db:seed'
    %x[#{cmd}]
  end
end