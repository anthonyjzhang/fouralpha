import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("fouralpha-b77bd-firebase-adminsdk-u44he-3944c76ddb.json")
app = firebase_admin.initialize_app(cred)
firestore_client = firestore.client()