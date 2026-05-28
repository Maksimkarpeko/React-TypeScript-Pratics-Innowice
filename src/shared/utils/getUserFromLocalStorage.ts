export const getUserFromLocalStorage = <T>(key: string): T | null => {
  try {
    const user = localStorage.getItem(key)
    return user ? JSON.parse(user) : null
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error
    }
    return null
  }
}
