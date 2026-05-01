import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";
import { SkinFonts } from "./skin-fonts";

interface EmailProps {
  firstName: string | undefined;
  lastName: string | undefined;
}

export const Email = ({ firstName, lastName }: EmailProps) => (
  <Tailwind>
    <Html lang="en">
      <Head>
        <SkinFonts />
      </Head>
      <Body className="bg-black text-white m-0 p-0 font-15 font-serif">
        <Preview>Thank you for contacting Don Dinh Leather!</Preview>
        <Section className="m-0 p-0 pt-[92px] mobile:pt-0">
          <Container className="bg-bg mx-auto w-full max-w-[640px]">
            <Section className="bg-bg pt-[40px] pr-[32px] pb-[24px] pl-[40px] text-xl font-bold font-serif">
              <span className="">Don</span>
              <span className="text-purple-400">Dinh</span>
            </Section>
            <Section className="px-4 w-full">
              <Img
                src="https://res.cloudinary.com/dhadoo9ui/image/upload/a_90/ar_16:9,c_fill,w_1216,g_auto,q_auto,f_auto/v1776442156/PXL_20251125_062001550.RAW-02.ORIGINAL_jy2pcy.jpg"
                alt="Don Dinh Leather Craftsmanship"
                width={608}
                className="w-full max-w-[608px]"
              />
            </Section>
            <Section className="px-[40px] mobile:px-6 py-[80px]">
              <Section className="mb-[36px]">
                <Text className="mb-8 text-2xl font-serif text-fg">
                  Thank you for contacting Don Dinh Leather – Inquiry Received
                </Text>
                <Text className="m-0 mb-4 font-15 font-serif text-fg-2 text-lg">
                  Dear {firstName} {lastName},
                </Text>
                <Text className="m-0 mb-4 font-15 font-serif text-fg-2">
                  Thank you for reaching out to Don Dinh Leather. I have
                  received your message regarding our handmade leather goods.
                </Text>
                <Text className="m-0 mb-4 font-15 font-serif text-fg-2">
                  As a dedicated artisan, I personally review every inquiry to
                  ensure the best service. I will get back to you with a
                  detailed response within 24-48 hours.
                </Text>
                <Text className="m-0 mb-4 font-15 font-serif text-fg-2">
                  In the meantime, feel free to explore more of my bespoke
                  craftsmanship on my portfolio.
                </Text>
                <Text className="font-serif">
                  Best regards,
                  <br /> Don Dinh <br /> Leather Artisan
                </Text>
              </Section>
              <Section className="text-left"></Section>
            </Section>
            {/* Footer */}
          </Container>
        </Section>
      </Body>
    </Html>
  </Tailwind>
);

export default Email;
