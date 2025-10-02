import DemoRequest from '../models/DemoRequest.model.js'

export async function createDemoRequest(payload) {
  const created = await DemoRequest.create(payload)
  return created
}


