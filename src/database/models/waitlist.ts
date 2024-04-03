import { Model,model, Schema } from 'mongoose';

interface IWaitlistModel {
  email: string;
}

const waitlistSchema: Schema<IWaitlistModel> = new Schema(
  {
    email: { required: true, trim: true, type: String, unique: true },
  },
  { timestamps: true }
);


  let Waitlist: Model<IWaitlistModel>;

  try {
    Waitlist = model<IWaitlistModel>('waitlist');
  } catch (error) {
    Waitlist = model<IWaitlistModel>('waitlist', waitlistSchema);
  }


export default Waitlist;
