import m from 'mongoose'
import defaultBacklogSchema from './backlog'
import defaultSprintSchema from './sprint'
import defaultCardSchema from './card'
import defaultAcceptanceCriteriumSchema from './acceptanceCriterium'
import defaultLabelSchema from './label'
import Promise from 'bluebird'

m.Promise = Promise

export const mongoose = m

export const schemas = {
  backlog: defaultBacklogSchema,
  sprint: defaultSprintSchema,
  card: defaultCardSchema,
  acceptanceCriterium: defaultAcceptanceCriteriumSchema,
  label: defaultLabelSchema,
}

export default function({ backlogSchema, sprintSchema, cardSchema }) {
  return {
    Backlog: m.model('Backlog', backlogSchema || defaultBacklogSchema),
    Sprint: m.model('Sprint', sprintSchema || defaultSprintSchema),
    Card: m.model('Card', cardSchema || defaultCardSchema),
  }
}
