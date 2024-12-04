import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

async function main() {
  await client.connect();

  const schoolsData = {
    'Portland': 50,
    'Seattle': 80,
    'New York': 20,
    'Bogota': 20,
    'Cali': 40,
    'Paris': 2
  };

  for (const [school, value] of Object.entries(schoolsData)) {
    await client.hSet('HolbertonSchools', school, value, (err, reply) => {
      console.log('Reply:', reply);
    });
  }

  const hashContent = await client.hGetAll('HolbertonSchools');
  console.log(hashContent);

  client.quit();
}

main().catch(console.error);