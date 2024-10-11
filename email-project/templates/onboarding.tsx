import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text
} from 'jsx-email';




export const Template = () => (

  <Html>
    <Head >

    </Head>
    <Preview>Onboarding Template</Preview>
    <Tailwind>
      <Body className=" my-auto mx-auto font-sans px-4 rounded"

      >
        <Container className="   my-[40px] mx-auto p-[0px] max-w-[465px]"
          style={{
            background: '#FFFFFF',
          }}
        >
          <Container className="bg-neutral-400 w-full h-full">
            <Section
              className="w-full h-full py-4 px-4 bg-red-600"

            >
              <Column align="left">
                <Text className="text-4xl text-white font-bold font-sans tracking-tight"
                  style={{
                    fontSize: '40px',
                  }}
                >
                  Hello, User
                </Text>

                <Text className="text-4xl text-white font-serif  tracking-tight">
                  Your account is ready to use.
                </Text>

              </Column>



            </Section>

            <Section className="w-full h-full mt-0 px-4 bg-[#f9f9f9] border-b"

            >
              <Column align="left">

                <Text className="text-base text-black font-normal font-sans tracking-normal">
                  Hi User,
                </Text>

                <Text className="text-base text-black font-normal font-sans tracking-normal">
                  Congratulations! Your account is approved and verified, and you are ready to
                  start using our services.

                  <br /> <br />

                  If you have any questions or concerns, please dont hesitate to contact us at
                  support@acme.com.


                  <br /> <br />


                  - The Acme Team


                </Text>
              </Column>
            </Section>
            <Section className="w-full px-8 py-4 border-t bg-white"
              style={{
                borderTop: "1px solid #E5E5E5",
              }}
            >
              <Column colSpan={2} className="w-full" align="center">
                <Link className="font-normal font-sans text-blue-400 mt-1 text-sm tracking-tight">
                  Privacy Policy
                </Link>
                <Text className="font-normal font-sans text-gray-400 text-sm tracking-tight">
                  Please do not reply to this email. This email address is not
                  monitored
                </Text>
                <Text className="font-normal font-sans text-gray-400 text-sm tracking-tight">
                  © 2024 Acme Inc
                </Text>
              </Column>
            </Section>
          </Container>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)



