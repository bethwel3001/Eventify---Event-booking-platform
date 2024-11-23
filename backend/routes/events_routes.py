from flask import Blueprint, jsonify, request
from models import db, Event

event_blueprint = Blueprint('events', __name__)


# Fetch all events
@event_blueprint.route('/', methods=['GET'])
def get_events():
    events = Event.query.all()
    event_list = [
        {
            "id": event.id,
            "title": event.title,
            "description": event.description,
            "date": event.date.strftime("%Y-%m-%d %H:%M:%S"),
            "location": event.location,
            "capacity": event.capacity,
            "attendees": event.attendees
        }
        for event in events
    ]
    return jsonify(event_list)

event_blueprint = Blueprint('events', __name__)

@event_blueprint.route('/create', methods=['POST'])
def create_event():
    data = request.json
    event = Event(name=data['name'], date=data['date'], location=data['location'])
    db.session.add(event)
    db.session.commit()
    return jsonify({'message': 'Event created successfully'}), 201
# Host a new event
@event_blueprint.route('/host', methods=['POST'])
def host_event():
    data = request.json
    new_event = Event(
        title=data['title'],
        description=data['description'],
        date=data['date'],
        location=data['location'],
        capacity=data['capacity']
    )
    db.session.add(new_event)
    db.session.commit()
    return jsonify({"message": "Event hosted successfully"}), 201
