import { Model, model, Schema } from 'mongoose';

interface IContactUsModel {
  discordHandle: string;
  email: string;
  message: string;
  name: string;
  organization: string;
}

const contactUsSchema: Schema<IContactUsModel> = new Schema(
  {
    discordHandle: { trim: true, type: String },
    email: { required: true, trim: true, type: String },
    message: { required: true, trim: true, type: String },
    name: { trim: true, type: String },
    organization: { trim: true, type: String },
  },
  { timestamps: true }
);

let ContactUs: Model<IContactUsModel>;

try {
  ContactUs = model<IContactUsModel>('contactUs');
} catch (error) {
  ContactUs = model<IContactUsModel>('contactUs', contactUsSchema);
}

export default ContactUs;
