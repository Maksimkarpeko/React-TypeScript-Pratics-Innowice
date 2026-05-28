import { BASE_URL } from '../constants'

export const customFetch = async <T>(url: string, options?: RequestInit): Promise<T> => {
  try {
    const defaultOptions: RequestInit = {
      ...options,
      headers: { 'Content-Type': 'application/json', ...options?.headers },
    }

    const response = await fetch(`${BASE_URL}${url}`, defaultOptions)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      switch (response.status) {
      case 400:
        throw new Error(`Bad Request: ${errorData.message}`)
      case 404:
        throw new Error(`Not Found: ${errorData.message}`)
      case 500:
        throw new Error(`Internal Server Error: ${errorData.message}`)
      default:
        throw new Error('Ops problem with the server!!!')
      }
    }

    return await response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}
