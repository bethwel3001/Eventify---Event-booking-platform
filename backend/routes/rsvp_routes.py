from flask import Blueprint, request, jsonify
from models import db, Event, RSVP

rsvp_blueprint = Blueprint('rsvp', __name__)

@rsvp_blueprint.route('/create', methods=['POST'])
def create_rsvp():
    data = request.json
    rsvp = RSVP(user_id=data['user_id'], event_id=data['event_id'], status='Confirmed')
    db.session.add(rsvp)
    db.session.commit()
    return jsonify({'message': 'RSVP created successfully'}), 201
