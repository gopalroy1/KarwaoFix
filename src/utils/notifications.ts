/** @format */

interface BookingNotificationData {
  name: string
  email: string
  phone: string
  service: string
  message?: string
}

/**
 * Sends a booking notification via our API
 * @param data The booking form data
 * @returns Promise that resolves when the notification is sent
 */
export const sendBookingNotification = async (data: BookingNotificationData): Promise<void> => {
  try {
    const response = await fetch("/api/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error("Failed to send notification")
    }

    const result = await response.json()
    if (!result.success) {
      throw new Error(result.error || "Failed to send notification")
    }

    console.log("Notification sent successfully:", result)
  } catch (error) {
    console.error("Failed to send booking notification:", error)
    throw error
  }
}
