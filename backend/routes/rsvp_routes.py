from flask import Blueprint, jsonify, request
from models import db, Event, RSVP

rsvp_blueprint = Blueprint('rsvp', __name__)

# RSVP to an event
@rsvp_blueprint.route('/<int:event_id>', methods=['POST'])
def rsvp(event_id):
    data = request.json
    event = Event.query.get(event_id)

    if not event:
        return jsonify({"error": "Event not found"}), 404

    if event.attendees >= event.capacity:
        return jsonify({"error": "Event is sold out"}), 400

    # Add RSVP
    new_rsvp = RSVP(
        event_id=event_id,
        name=data['name'],
        email=data['email']
    )
    event.attendees += 1
    db.session.add(new_rsvp)
    db.session.commit()
    return jsonify({"message": "RSVP successful"}), 201

# Get RSVPs for an event
@rsvp_blueprint.route('/<int:event_id>', methods=['GET'])
def get_rsvps(event_id):
    rsvps = RSVP.query.filter_by(event_id=event_id).all()
    rsvp_list = [{"name": rsvp.name, "email": rsvp.email} for rsvp in rsvps]
    return jsonify(rsvp_list)
