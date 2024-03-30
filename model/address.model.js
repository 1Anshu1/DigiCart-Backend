import { Schema, model, Types } from "mongoose";

const addressSchema = new Schema(
    {
        street: {
            type: String,
            required: [true, "Please provide the street"],
        },
        city: {
            type: String,
            required: [true, "Please provide the city"],
        },
        state: {
            type: String,
            required: [true, "Please provide the state"],
        },
        country: {
            type: String,
            required: [true, "Please provide the country"],
        },
        zipcode: {
            type: String,
            required: [true, "Please provide the zipcode"],
        },
        user: {
            type: Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    { timestamps: true }
);

const Address = model("Address", addressSchema);
export default Address;
