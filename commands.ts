import 'dotenv/config'
import { installGlobalCommands } from './utils'

export type Command = {
  name: string;
  description: string;
  type: number;
  integration_types: number[];
  contexts: number[];
}

// Simple test command
const TEST_COMMAND: Command = {
  name: 'test',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
}

// Simple selec command
const SELEC_COMMAND: Command = {
  name: 'selec',
  description: 'Templates de sélecs',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
}

const ALL_COMMANDS: Command[] = [TEST_COMMAND, SELEC_COMMAND]

installGlobalCommands(process.env.APP_ID!, ALL_COMMANDS)
