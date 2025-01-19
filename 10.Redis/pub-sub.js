//pub/sub->
/*
->publisher->send->channel->subscriber will consume
*/
import redis from "redis";
const client = redis.createClient({
  host: "localhost",
  port: 6379,
});
client.on("error", (error) => {
  console.log("Redis client error occured!", error);
});
async function testAdditionalFeatures() {
  try {
    await client.connect();
    const subscriber = client.duplicate(); //create a new client->share the same connection
    await subscriber.connect(); //connects to redis server for the subscriber
    await subscriber.subscribe("dummy-data", (message, channel) => {
      console.log(`Received message from ${channel}:${message}`);
    });
    await client.publish("dummy-data", "some dummy data from publisher");
    await client.publish("dummy-data", "some new dummy data from publisher");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await subscriber.unsubscribe("dummy-data");
    await subscriber.quit();
    //pipelining and transactions
    const multi = client.multi();
    multi.set("key-transactions1", "value1");
    multi.set("key-transactions2", "value2");
    multi.get("key-transactions1");
    multi.get("key-transactions2");
    const results = await multi.exec();
    console.log(results);
    const pipeline = client.multi();
    multi.set("key-pipeline1", "value1");
    multi.set("key-pipeline2", "value2");
    multi.get("key-pipeline1");
    multi.get("key-pipeline2");
    const pipelineresults = await multi.exec();
    console.log(pipelineresults);
    //batch data operations->
    const pipelineOne = client.multi();
    for (let i = 0; i < 1000; i++) {
      pipeline.set(`user:${i}:action`, `Action ${i}`);
    }
    await pipelineOne.exec();
    const dummyExample = client.multi();
    multi.decrBy("account:1234:balance", 100);
    multi.incr("account:1234:balance", 100);
    const finalresults = await multi.exec();
    console.log(finalresults);
  } catch (err) {
    console.log(err);
  } finally {
    client.quit();
  }
}
testAdditionalFeatures();
