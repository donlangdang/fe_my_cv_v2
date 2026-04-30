"use server";
import { Resend } from "resend";
import { ContactSchema, ActionResponse } from "@/lib/schema";
import { Email } from "@/components/sendEmail/SendEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  prevState: ActionResponse,
  formData: FormData,
): Promise<ActionResponse> {
  // 1. Lấy dữ liệu từ FormData
  const rawData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    senderEmail: formData.get("senderEmail"),
    message: formData.get("message"),
  };

  // 2. Kiểm tra dữ liệu bằng Zod
  const validatedFields = ContactSchema.safeParse(rawData);

  // Nếu dữ liệu sai, trả về lỗi ngay lập tức
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, senderEmail, message } = validatedFields.data;

  // 3. Gửi Email qua Resend
  try {
    const mailToMe = await resend.emails.send({
      from: "Don Dinh Portfolio <noreply@contact.dondinhleather.com>", // Khi verify domain xong thì đổi thành contact@jaxtone.vn
      to: "congdondev@gmail.com", // Email nhận thông báo của bạn
      subject: `Request Bespoke from ${firstName} ${lastName}`,
      replyTo: senderEmail,
      text: `client: ${firstName} ${lastName}\nEmail: ${senderEmail}\nContent: ${message}`,
    });

    /** * LỆNH 2: Gửi email xác nhận cho KHÁCH HÀNG
     * LƯU Ý: Đoạn này sẽ báo lỗi "403" nếu bạn chưa verify domain.
     * Khi nào có domain, hãy bỏ dấu cmt (/*) ở dưới đi.
     */

    const mailToCustomer = resend.emails.send({
      from: "Don Dinh <noreply@contact.dondinhleather.com>",
      to: senderEmail,
      subject: "Confirm your Bespoke order at Don Dinh Leathercraft",
      text: `Hi ${firstName}, I have received your request and will respond as soon as possible via this email.`,
      react: Email({ firstName, lastName }),
    });

    // Nếu dùng cả 2 thì dùng:
    const results = await Promise.all([mailToMe, mailToCustomer]);

    // Kiểm tra nếu có lỗi ở bất kỳ luồng nào
    const hasError = results.some((res) => res.error);

    if (hasError) {
      return {
        success: false,
        errors: {
          server: [
            "An error occurred while sending the email; please try again later.",
          ],
        },
      };
    }

    return { success: true, errors: {} };
  } catch (err) {
    return {
      success: false,
      errors: { server: ["Server connection error, please try again later."] },
    };
  }
}
