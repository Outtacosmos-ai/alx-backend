import { createClient } from 'redis';
import { promisify } from 'util';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

const connectAsync = promisify(client.connect).bind(client);
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

async function setNewSchool(schoolName, value) {
  const reply = await setAsync(schoolName, value);
  console.log(reply);
}

async function displaySchoolValue(schoolName) {
  const reply = await getAsync(schoolName);
  console.log(reply);
}

async function main() {
  await connectAsync();
  
  await displaySchoolValue('Holberton');
  await setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
  
  client.quit();
}

main().catch(console.error);