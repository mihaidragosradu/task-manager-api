// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true  }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
   
    // db.collection('users').updateOne({
    //     _id: new ObjectID("6033b6c10ee9a842ac71e27a")
    // }, {
    //     $set: {
    //         name: "Mike"
    //     }
    // } ).then( (result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('tasks').updateMany({
    //     completed: false

    // }, {
    // $set: {
    //     completed: true
    // }

    // }).then( (result) => {
    //     console.log(result.modifiedCount)

    // }).catch( (error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age:27
    // }).then( (result) => {
    //     console.log(result)
    // }
    // ).catch( (error) => {
    //     console.log(error)
    // })

    db.collection('tasks')
    .deleteOne({
        description: "Clean the house"
    })
    .then( (result) => {
        console.log(result);
    })
    .catch( (error) => {
        console.log(error);
    })
})