
# libraries and dependanceies / importation
from models import User
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from models import db 
from flask_migrate import Migrate
from flask import Flask, render_template, request, redirect, url_for, session, jsonify

# Initialize Flask app
app = Flask(__name__)
CORS(app, supports_credentials=True)
CORS(app)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:bethwel3001@localhost/my_project_db'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key'  # Replace with your secure key

# Initialize extensions
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)

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

## Authentication Routes
@app.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')
    if email in users and users[email] == password:
        session['user'] = email  # Save the user in the session
        return jsonify({"redirect_url": url_for('dashboard'), "message": f"Welcome, {email.split('@')[0]}!"})
    return jsonify({"error": "Invalid credentials"}), 401

@app.route('/signup', methods=['POST'])
def signup():
    email = request.form.get('email')
    password = request.form.get('password')
    if email in users:
        return jsonify({"error": "User already exists"}), 409
    users[email] = password
    session['user'] = email  # Log in the new user
    return jsonify({"redirect_url": url_for('dashboard'), "message": f"Welcome, {email.split('@')[0]}!"})

@app.route('/dashboard')
def dashboard():
    if 'user' not in session:
        return redirect(url_for('index'))  # Redirect to login if not logged in
    username = session['user'].split('@')[0]  # Extract username
    return render_template('dashboard.html', username=username)

@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('http://127.0.0.1:3000'))
# Blueprints for Event and RSVP Handling
from routes.events_routes import event_blueprint
from routes.rsvp_routes import rsvp_blueprint

app.register_blueprint(event_blueprint, url_prefix='/events')
app.register_blueprint(rsvp_blueprint, url_prefix='/rsvp')

# Main entry point
if __name__ == '__main__':
    app.run(debug=True)
