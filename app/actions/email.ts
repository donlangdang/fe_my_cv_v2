"use server";

import { Resend } from "resend";
import { ContactSchema, ActionResponse } from "@/lib/schema";

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
    const { data, error } = await resend.emails.send({
      from: "Don Dinh Portfolio <onboarding@resend.dev>", // Khi verify domain xong thì đổi thành contact@jaxtone.vn
      to: "donlangdangcc@gmail.com", // Email nhận thông báo của bạn
      subject: `Yêu cầu Bespoke từ ${firstName} ${lastName}`,
      replyTo: senderEmail,
      text: `Khách hàng: ${firstName} ${lastName}\nEmail: ${senderEmail}\nNội dung: ${message}`,
    });

    /** * LỆNH 2: Gửi email xác nhận cho KHÁCH HÀNG
     * LƯU Ý: Đoạn này sẽ báo lỗi "403" nếu bạn chưa verify domain.
     * Khi nào có domain, hãy bỏ dấu cmt (/*) ở dưới đi.
     */
    /*
    const mailToCustomer = resend.emails.send({
      from: "Don Dinh <onboarding@resend.dev>", // Sau này đổi thành contact@jaxtone.vn
      to: senderEmail, 
      subject: "Xác nhận yêu cầu Bespoke tại Jaxtone Leathercraft",
      text: `Chào ${firstName}, mình đã nhận được yêu cầu của bạn và sẽ phản hồi sớm nhất qua email này.`,
    });
    */

    // Chạy các lệnh gửi mail
    // const { error } = await mailToMe;
    // Nếu dùng cả 2 thì dùng: await Promise.all([mailToMe, mailToCustomer]);

    if (error) {
      return {
        success: false,
        errors: { server: [error.message] },
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
