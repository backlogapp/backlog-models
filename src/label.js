import { Schema } from 'mongoose'

export default new Schema({
  _id: String,
  name: String,
  color: String,
  sync: Object
})
