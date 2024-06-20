import mongoose, { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  name: String
}

// console.log(myCollectionSchema);

export const userSchema = SchemaFactory.createForClass(User)

