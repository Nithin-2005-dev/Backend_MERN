import redis from "redis";
const client = redis.createClient({
  host: "localhost",
  port: 6379,
});
client.on("error", (error) => {
  console.log("Redis client error occured!", error);
});
async function redisDataStructure() {
  try {
    //strings->SET,GET,MSET,MGET
    await client.connect();
    await client.set("user:name", "nithin");
    const name = await client.get("user:name");
    console.log(name);
    await client.mSet(["user:email", "nk0402246@gmail.com", "user:age", "20"]);
    const [email, age] = await client.mGet(["user:email", "user:age"]);
    console.log(email, age);
    //lists->LPUSH,RPUSH,LRANGE,LPOP,RPOP
    // await client.rPush("notes", ["note 1", "note 2", "note 3"]);
    // await client.lPop("notes")
    const notes = await client.lRange("notes", 0, -1);
    console.log(notes);
    //sets->SADD,SMEMBERS,SISMEMBER,SREM
    await client.sAdd("user:names", ["nithin", "lithin"]);
    console.log(await client.sMembers("user:names"));
    console.log(await client.sIsMember("user:names", "kithin"));
    //sorted sets
    //ZADD,ZRANGE,ZRANK,ZREM
    await client.zAdd("cart", [
      {
        score: 100,
        value: "Cart 1",
      },
      {
        score: 150,
        value: "Cart 2",
      },
      {
        score: 200,
        value: "Cart 3",
      },
    ]);
    console.log(await client.zRangeWithScores("cart", 0,-1));
    //hashes->HSET,HGET,HGETALL,HDEL
    await client.hSet("product1",{
        name:"product 1",
        desc:"product 1 description",
        rating:"5"
    })
    console.log(await client.hGet("product1","desc"))
  } catch (err) {
    console.log(err);
  } finally {
    client.quit();
  }
}
redisDataStructure();
