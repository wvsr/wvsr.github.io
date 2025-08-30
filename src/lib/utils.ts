import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string): string {
  return text
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing spaces
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove non-alphanumeric characters
    .replace(/--+/g, '-') // Replace multiple hyphens with a single one
}

import { formatDistanceToNowStrict } from 'date-fns'

export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString)
  return formatDistanceToNowStrict(date, { addSuffix: true })
}
