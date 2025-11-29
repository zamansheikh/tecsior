import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { key } = body

        const expectedKey = process.env.MAIL_SERVER_KEY || "pnx@123"

        if (!key || key !== expectedKey) {
            return NextResponse.json({ error: "Unauthorized - invalid key" }, { status: 401 })
        }

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        console.error("Auth error:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
