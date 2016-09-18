import { Schema } from 'mongoose'
import label from './label'

export default new Schema({
  _id: String,
  labels: [label],
  sync: Object
})
