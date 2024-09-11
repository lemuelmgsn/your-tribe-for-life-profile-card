import fetchJson from "$lib/fetch-json"

export async function load() {
  const url = 'https://fdnd.directus.app/items/person/36'

  const persons = await fetchJson(url)

  return {
    persons: persons.data
  }                                                                               
}