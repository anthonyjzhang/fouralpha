import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import os
from dotenv import load_dotenv

load_dotenv()

path = os.getenv("FIREBASE_CONFIG_PATH")
cred = credentials.Certificate(path)
app = firebase_admin.initialize_app(cred)
firestore_client = firestore.client()
