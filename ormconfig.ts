import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions'

const config: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'db',
    synchronize:false,
    entities   : [
        'dist/src/**/*.entity.js'
     ],
     migrations : [
        'dist/src/db/migration/*.js'
     ],
}

export default config;