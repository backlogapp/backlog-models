import { Schema } from 'mongoose'
import acceptanceCriterium from './acceptanceCriterium'
import random from 'meteor-random'

export default new Schema({
  _id: { type: String, default: () => random.id() },
  title: String,
  description: String,
  estimate: { type: Number, match: /^(1|2|3|5|8|13)/ },
  status: { type: String, default: 'not-ready' },
  acceptanceCriteria: { type: [acceptanceCriterium], default: [] },
  labelIds: { type: [String], default: [] },
  attachments: { type: [String], default: [] },
  sync: Object
})

