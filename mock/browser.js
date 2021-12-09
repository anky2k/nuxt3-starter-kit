import { setupWorker } from 'msw'
import handlers from './handlers'

export const worker = setupWorker(...handlers)

// TODO https://mswjs.io/docs/api/setup-server