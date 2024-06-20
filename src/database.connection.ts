import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class DatabaseConnection {
  async createConnection(): Promise<void> {
    mongoose.connect('mongodb://localhost:27017/mydatabase')
      .then(() => console.log('Connected!'))
      .catch(error => console.error('Error connecting to database:', error));
  }

  async closeConnection(): Promise<void> {
    mongoose.disconnect()
      .then(() => console.log('Disconnected!'))
      .catch(error => console.error('Error disconnecting from database:', error));
  }
}