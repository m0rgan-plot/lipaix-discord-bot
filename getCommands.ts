import 'dotenv/config';
import {getGlobalCommands, installGlobalCommands} from './utils';

getGlobalCommands(process.env.APP_ID!);
