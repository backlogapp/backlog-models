import { Schema } from 'mongoose'

export default new Schema({
  id: String,
  title: String,
  done: Boolean,
  sync: Object
})
