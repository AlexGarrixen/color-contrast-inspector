import { css } from "@root/styled-system/css";

import { dmSans } from "@/styles/fonts";
import { Layout } from "@/components/layout";
// import { Aside } from "@/components/aside";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/google-analytics";
import metadata from "@/config/seo";

import "../styles/globals.css";

const IS_PROD = process.env.NODE_ENV === "production";

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${css({
          color: "text-primary",
          bg: "bg-primary",
          textStyle: "body-base",
        })}`}
      >
        <Layout
          content={
            <>
              {children}
              <Footer />
            </>
          }
          header={<Navbar />}
        />
        {IS_PROD ? <GoogleAnalytics /> : null}
      </body>
    </html>
  );
}
