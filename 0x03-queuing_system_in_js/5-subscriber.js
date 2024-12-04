import { createClient } from 'redis';

const subscriber = createClient();

subscriber.on('error', (err) => console.log('Redis Client Error', err));

async function main() {
  await subscriber.connect();

  console.log('Redis client connected to the server');

  subscriber.subscribe('holberton school channel', (message) => {
    console.log(message);
    if (message === 'KILL_SERVER') {
      subscriber.unsubscribe();
      subscriber.quit();
    }
  });
}

main().catch(console.error);