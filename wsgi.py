import sys
import os

# Add your project directory to the Python path
path = os.path.dirname(os.path.abspath(__file__))  # Get the absolute path of the current file
if path not in sys.path:
    sys.path.append(path)

# Import your Flask app
from app import app as application  # Replace 'app' with the name of your Flask app instance