import type { Schema } from '@liam-hq/db-structure'
import type { Repositories } from '../../repositories'

export type WorkflowState = {
  userInput: string
  generatedAnswer?: string | undefined
  finalResponse?: string | undefined
  history: string[]
  schemaData: Schema
  projectId?: string | undefined
  error?: string | undefined

  // Schema update fields
  buildingSchemaId: string
  latestVersionNumber?: number | undefined
  organizationId?: string | undefined
  userId: string

  // Message saving fields
  designSessionId: string

  // Repository dependencies for data access
  repositories: Repositories
}

/**
 * Workflow execution options
 */
export interface WorkflowOptions {
  recursionLimit?: number
}
