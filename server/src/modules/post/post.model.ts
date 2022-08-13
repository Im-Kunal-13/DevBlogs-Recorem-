import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../user/user.model";

export class Post {
  @prop({ required: true })
  public title: string;

  @prop({ required: true })
  public description: string;

  @prop({ required: true })
  public coverImage: string;

  @prop({ required: true })
  public timeCreated: string;

  @prop({ required: true })
  public categories: string[];

  @prop({ required: true, ref: () => User })
  public owner: Ref<User>;
}

export const PostModel = getModelForClass(Post);
