import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_add(client):
    data = {'num1': 5, 'num2': 3}
    response = client.post('/api/add', json=data)
    assert response.status_code == 200
    assert response.json['result'] == 8

def test_subtract(client):
    data = {'num1': 5, 'num2': 3}
    response = client.post('/api/subtract', json=data)
    assert response.status_code == 200
    assert response.json['result'] == 2

def test_empty_input(client):
    response = client.post('/api/add', json={})
    assert response.status_code == 200
    assert response.json['result'] == 0
