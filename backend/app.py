from flask import Flask, request, jsonify, render_template, session, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from models import db  # Import 'db' from models
from flask_migrate import Migrate


# Initialize Flask app
app = Flask(__name__)
CORS(app, supports_credentials=True)
CORS(app)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # Replace with your DB URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key'  # Replace with your secure key

# Initialize extensions
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Models
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

# Create tables
with app.app_context():
    db.create_all()

# Routes

@app.route('/')
def home():
    return redirect("http://127.0.0.1:3000")  #frontend URL

@app.route('/events')
def events():
    # Render the dashboard or events page
    return render_template('dashboard.html')

@app.route('/dashboard', methods=['GET'])
def dashboard():
    return render_template('dashboard.html')

## Authentication Routes
@app.route('/signup', methods=['POST'])
def signup():
    """Handle user registration."""
    data = request.json
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'message': 'Email already exists'}), 400

    hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
    user = User(username=data['name'], email=data['email'], password=hashed_password)
    db.session.add(user)
    db.session.commit()
     # Redirect to dashboard after signup
    return redirect(url_for('dashboard'))

@app.route('/login', methods=['POST'])
def login():
    """Handle user login."""
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password, data['password']):
        session['user_id'] = user.id  # Store user ID in session
        return redirect('dashboard')
    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/logout', methods=['GET'])
def logout():
    """Handle user logout."""
    session.clear()
    return jsonify({'message': 'Logged out successfully'}), 200

# Blueprints for Event and RSVP Handling
from routes.events_routes import event_blueprint
from routes.rsvp_routes import rsvp_blueprint

app.register_blueprint(event_blueprint, url_prefix='/events')
app.register_blueprint(rsvp_blueprint, url_prefix='/rsvp')

# Main entry point
if __name__ == '__main__':
    app.run(debug=True)
