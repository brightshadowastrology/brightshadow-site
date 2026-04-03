import config from '@payload-config'
// @ts-ignore – payload doesn't export this path in its package types
import { generateTypes } from 'payload/dist/bin/generateTypes.js'

await generateTypes(config)
console.log('Types generated successfully.')
process.exit(0)
