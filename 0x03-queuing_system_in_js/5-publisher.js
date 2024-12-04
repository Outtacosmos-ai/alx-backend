import { createClient } from 'redis';

const publisher = createClient();

publisher.on('error', (err) => console.log('Redis Client Error', err));

function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    publisher.publish('holberton school channel', message);
  }, time);
}

async function main() {
  await publisher.connect();

  console.log('Redis client connected to the server');

  publishMessage("Holberton Student #1 starts course", 100);
  publishMessage("Holberton Student #2 starts course", 200);
  publishMessage("KILL_SERVER", 300);
  publishMessage("Holberton Student #3 starts course", 400);

  setTimeout(() => {
    publisher.quit();
  }, 1000);
}

main().catch(console.error);