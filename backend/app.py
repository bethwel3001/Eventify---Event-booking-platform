from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Register Blueprints
from routes.event_routes import event_blueprint
from routes.rsvp_routes import rsvp_blueprint

app.register_blueprint(event_blueprint, url_prefix='/events')
app.register_blueprint(rsvp_blueprint, url_prefix='/rsvp')

if __name__ == '__main__':
    app.run(debug=True)
