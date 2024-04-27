import { BASE_URL } from 'src/utils/constants'

export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`)
  const data = await response.json()
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`)
  }
  return data
}
