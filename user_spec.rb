require_relative './runner'

require 'sequel'

Sequel.connect 'postgres://localhost/tests'

class User < Sequel::Model(:users)
end

describe User do
    def user
        @user ||= User.create(email: 'alice@example.com',
                              last_login: Time.new(2015, 10, 21, 10, 22))
    end

    it 'has some attributes' do
        user.email.should == 'alice@example.com'
        user.last_login.should == Time.new(2015, 10, 21, 10, 22)
    end
end
