import sys
# Add your project directory to the Python path
path = '/home/your-username/your-project-folder'
if path not in sys.path:
    sys.path.append(path)

from app import app as application  # Replace 'app' with the name of your Flask app instance