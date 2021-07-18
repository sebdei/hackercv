import { createClient } from 'contentful'

const client = createClient({
  accessToken: 'LtstPIIgqqkttUPiqo_U7B47_D5wVCxmQzXF9WXSD2E',
  space: 'ma4hmf4ocmnf'
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
