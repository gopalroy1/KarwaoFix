/** @format */

import { NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = "7707459968: AAFxNLOPVQQZ7iG20pm1ci7rERP6iVzo3Ag"
const TELEGRAM_CHAT_ID = "7707459968"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Format the message
    const message = `🚨 *New Service Booking Request*%0A%0A
👤 *Name:* ${data.name}%0A
📧 *Email:* ${data.email}%0A
📱 *Phone:* ${data.phone}%0A
🔧 *Service:* ${data.service}%0A
💬 *Message:* ${data.message || "No additional message"}%0A%0A
Please respond to this booking request.`

    // Send to Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}&parse_mode=Markdown`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

    if (!response.ok) {
      throw new Error("Failed to send Telegram notification")
    }

    const result = await response.json()
    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error("Failed to send notification:", error)
    return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 500 })
  }
}
