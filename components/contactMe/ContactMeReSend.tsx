"use client";
import { useActionState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react";
import LinkSocialMedia from "@/components/linkSocialMedia/LinkSocialMedia";
import { sendEmail } from "@/app/actions/email";
import { ActionResponse } from "@/lib/schema";

const initialState: ActionResponse = {
  success: false,
  errors: {},
};

const ContactMeReSend = () => {
  // Hook quản lý trạng thái Server Action
  const [state, action, isPending] = useActionState(sendEmail, initialState);

  // Có thể dùng useEffect để thông báo hoặc reset form khi success = true
  useEffect(() => {
    if (state.success) {
      // Bạn có thể thêm logic xóa trắng form hoặc hiện Toast ở đây
    }
  }, [state.success]);

  return (
    <form
      action={action}
      className="w-full lg:w-1/2 px-6 flex flex-col items-center justify-center gap-10 lg:gap-14 z-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow-lg"
    >
      <LinkSocialMedia />
      <h2 className="font-bold text-2xl lg:text-4xl tracking-widest">
        <span className="text-purple-400">C</span>ontact Me
        <span className="text-purple-400">.</span>
      </h2>
      <div className="w-full flex items-center justify-between gap-4">
        <Input
          name="firstName"
          className="backdrop-blur-md w-1/2 border border-purple-400 placeholder:text-zinc-900 placeholder:text-sm placeholder:font-medium"
          placeholder="First name"
        />
        {state.errors?.firstName && (
          <span className="text-red-400 text-[10px] uppercase">
            {state.errors.firstName[0]}
          </span>
        )}
        <Input
          name="lastName"
          className="backdrop-blur-md w-1/2 border border-purple-400 placeholder:text-zinc-900 placeholder:text-sm placeholder:font-medium"
          placeholder="Last name"
        />
        {state.errors?.lastName && (
          <span className="text-red-400 text-[10px] uppercase">
            {state.errors.lastName[0]}
          </span>
        )}
      </div>
      <Input
        name="senderEmail"
        className="backdrop-blur-md w-full border border-purple-400 placeholder:text-zinc-900 placeholder:text-sm placeholder:font-medium"
        placeholder="Email"
      />
      {state.errors?.senderEmail && (
        <span className="text-red-400 text-[10px] uppercase">
          {state.errors.senderEmail[0]}
        </span>
      )}

      <Textarea
        name="message"
        className="backdrop-blur-md w-full border border-purple-400 placeholder:text-zinc-900 placeholder:text-sm placeholder:font-medium"
        placeholder="Message"
      />
      {state.errors?.message && (
        <span className="text-red-400 text-[10px] uppercase">
          {state.errors.message[0]}
        </span>
      )}
      {state.errors?.server && (
        <p className="text-red-500 text-xs bg-red-500/10 p-2 border border-red-500/20 w-full text-center">
          {state.errors.server[0]}
        </p>
      )}
      <Button
        type="submit"
        size="lg"
        disabled={isPending}
        className="bg-purple-400 cursor-pointer hover:bg-purple-300 text-zinc-900 text-sm font-medium"
      >
        {isPending ? "Sending..." : "Submit"}
      </Button>
      {state.success && (
        <div className="text-green-400 text-sm font-medium bg-green-400/10 p-3 border border-green-400/20 w-full text-center animate-in fade-in zoom-in duration-300">
          Gửi thành công! Don sẽ liên hệ lại với bạn sớm nhất.
        </div>
      )}
      <div className="w-full h-auto flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <MapPinIcon />
          <p className="text-xs">
            Ea Ktur Commune, Cu Kuin District, Dak Lak Province, Vietnam
          </p>
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon />
          <p className="text-xs">+84 846414579</p>
        </div>
        <div className="flex items-center gap-2">
          <EnvelopeIcon />
          <p className="text-xs">congdondev@gmail.com</p>
        </div>
      </div>
    </form>
  );
};

export default ContactMeReSend;
