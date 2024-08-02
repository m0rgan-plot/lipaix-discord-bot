import 'dotenv/config'
import { getGlobalCommands } from './utils'

getGlobalCommands(process.env.APP_ID!)
