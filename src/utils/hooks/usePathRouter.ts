/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useCallback } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export function usePathRouter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params
    },
    [searchParams]
  )

  const onClickPath = (key: string, valuePath: string) => {
    const path = `${pathname}?${createQueryString(key, valuePath)}`
    router.replace(path)
  }

  const onClickPathCancel = (key: string, valuePath: string) => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    params.delete(key)
    const newParams = params.toString()
    const path = `${pathname}?${newParams}`
    router.replace(path)
  }

  return {
    onClickPath,
    onClickPathCancel,
  }
}
