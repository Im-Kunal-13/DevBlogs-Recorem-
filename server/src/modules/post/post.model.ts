import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import {User} from "../user/user.model"


export class Post {
  @prop({ required: true})
  public title: string;

  @prop({ required: true })
  public description: string;

  @prop({ required: true })
  public photo: string;

  @prop({ required: true, ref: () => User })
  public owner: Ref<User>;
}

export const PostModel = getModelForClass(Post, {
  schemaOptions: {
    timestamps: true,
  },
});
