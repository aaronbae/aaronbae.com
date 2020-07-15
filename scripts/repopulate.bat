mongo aaronbaeDB --eval "db.dropDatabase()"
mongodump --uri="mongodb+srv://aaronbae:kingoftheworld123@cluster0-ecnt3.mongodb.net/aaronbaeDB"
mongorestore dump/
rd /s /q dump