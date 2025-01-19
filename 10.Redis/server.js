import redis from "redis";
const client = redis.createClient({
  host: "localhost",
  port: 6379,
});
//event listener
client.on("error", (error) => {
  console.log("redis client error occured!");
});
async function testRedisConnection() {
  try {
    await client.connect();
    console.log("connected to redis");
    await client.set("key", "value");
    const extractValue = await client.get("key");
    console.log(extractValue);
    const deleteCount = await client.del("key");
    console.log(deleteCount);
    const extractUpdatedValue = await client.get("key");
    console.log(extractUpdatedValue);
    await client.set("count", "100");
    const increment = await client.incr("count");
    console.log(increment);
    const decrement = await client.decr("count");
    console.log(decrement);
  } catch (err) {
    console.log(err);
  } finally {
    await client.quit();
  }
}
testRedisConnection();
