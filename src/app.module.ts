import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseConnection } from './database.connection';
import { UsersModules } from './users/users.modules';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mydatabase'),
    UsersModules,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseConnection],
})
export class AppModule {}