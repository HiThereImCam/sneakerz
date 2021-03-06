class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader :password
    before_validation :ensure_session_token

    # a user can have many products in their cart 
    has_many :cart_products,
        foreign_key: :user_id,
        class_name: :CartProduct

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            user
        else
            nil
        end
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        #@password = password
        BCrypt::Password.new(self.password_digest) == (password)
    end
    
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
    
    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    
end
