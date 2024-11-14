from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)
DATABASE = 'todo.db'

# Initialize the database and create the to-do table if it doesn't exist
def init_db():
    with sqlite3.connect(DATABASE) as conn:
        cursor = conn.cursor()
        cursor.execute('''CREATE TABLE IF NOT EXISTS todos (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            task TEXT NOT NULL
                         )''')
        conn.commit()

# Connect to the database and return the connection object
def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/todos', methods=['GET'])
def get_todos():
    conn = get_db_connection()
    todos = conn.execute('SELECT * FROM todos').fetchall()
    conn.close()
    return jsonify([dict(todo) for todo in todos])

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
