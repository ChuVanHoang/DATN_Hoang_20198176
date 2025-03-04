import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,500&display=swap"
                rel="stylesheet"
            />
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  );
}
