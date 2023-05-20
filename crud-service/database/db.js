import mongoose from 'mongoose';

const Connection = async (username, password) => {
  
const URL=`mongodb://${username}:${password}@ac-asnmg3w-shard-00-00.3ytwvqu.mongodb.net:27017,ac-asnmg3w-shard-00-01.3ytwvqu.mongodb.net:27017,ac-asnmg3w-shard-00-02.3ytwvqu.mongodb.net:27017/?ssl=true&replicaSet=atlas-49uzer-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
       
    } catch(error) {
        console.log(error.message);
    }
}

export default Connection;