import { DataSource } from 'typeorm';

export default new DataSource (
   {
      type: 'sqlite',
      database: 'db',
      synchronize: false,
      entities: [
         'dist/src/**/*.entity.js'
      ],
      migrations: [
         'dist/src/db/migration/*.js'
      ],
      migrationsTableName: "custom_migration_table",
   }
)
