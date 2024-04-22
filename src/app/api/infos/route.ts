import { type NextRequest, NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest) {
  const currentDate = new Date().toISOString().slice(0, 10)

  try {
    return NextResponse.json({ date: currentDate })
  } catch (error) {
    return NextResponse.error()
  }
}
