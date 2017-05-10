
import { MongoClient } from 'mongodb'
import assert from 'assert'


class mongodb_helper {
    get_db_function = () => {
        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            console.log("Connected correctly to server.");
            db.close();
        })
    }
}

module.exports = mongodb_helper