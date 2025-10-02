import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  mongodb: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/learnnest',
    databaseName: undefined,
    options: {}
  },

  migrationsDir: path.join(__dirname, 'migrations'),

  changelogCollectionName: 'changelog',

  migrationFileExtension: '.cjs',
}


