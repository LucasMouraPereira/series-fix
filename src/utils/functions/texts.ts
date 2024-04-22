export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-')
  return `${day}/${month}/${year}`
}

export function limitString(input: string): string {
  return input?.length > 3 ? input.substring(0, 3) + '...' : input
}
