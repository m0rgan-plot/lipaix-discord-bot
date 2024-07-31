import 'dotenv/config';
import {Command} from "./commands";

type Options = { method: string, body?: string }

export async function DiscordRequest(endpoint: string, options: Options) {
  // append endpoint to root API URL
  const url = 'https://discord.com/api/v10/' + endpoint;
  // Use fetch to make requests
  const res = await fetch(url, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': 'DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)',
    },
    ...options
  });
  // throw API errors
  if (!res.ok) {
    const data = await res.json();
    console.log(res.status);
    throw new Error(JSON.stringify(data));
  }
  // return original response
  return res;
}

export async function installGlobalCommands(appId: string, commands: Command[]) {
  // API endpoint to overwrite global commands
  const endpoint = `applications/${appId}/commands`;

  try {
    // This is calling the bulk overwrite endpoint: https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands
    await DiscordRequest(endpoint, { method: 'PUT', body: JSON.stringify(commands) });
  } catch (err) {
    console.error(err);
  }

  console.log(`Successfully registered commands: ${commands.map(c => c.name).join(', ')}`);
}


export async function getGlobalCommands(appId: string) {
  // API endpoint to overwrite global commands
  const endpoint = `applications/${appId}/commands`;

  try {
    const response = await DiscordRequest(endpoint, { method: 'GET' });
    const json = await response.json()
    console.log(`Registered commands: ${JSON.stringify(json, null, 2)}`);
  } catch (err) {
    console.error(err);
  }

}

// Simple method that returns a random emoji from list
export const getRandomEmoji = () => {
  const emojiList = ['😭','😄','😌','🤓','😎','😤','🤖','😶‍🌫️','🌏','📸','💿','👋','🌊','✨'];
  return emojiList[Math.floor(Math.random() * emojiList.length)];
}

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
