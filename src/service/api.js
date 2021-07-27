import { createClient } from 'contentful'

const client = createClient({
  accessToken: '',
  space: ''
})

export async function getItems(contentType) {
  const params = { "content_type": contentType }
  const response = await client.getEntries(params)

  return response?.items?.map(item => item.fields)
}

export default {
  client,
  getItems
}
