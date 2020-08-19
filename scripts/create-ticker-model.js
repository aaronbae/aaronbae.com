db = connect('localhost:27017/aaronbaeDB')
print("===================")
print(db.getCollectionNames())
cursor = db.users.find();
while(cursor.hasNext()) {
  printjson(cursor.next())
}