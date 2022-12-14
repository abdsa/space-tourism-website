/* eslint-disable @next/next/google-font-preconnect */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

// @ts-ignore
import tailwindcss from "!raw-loader!../styles/bundle.css";
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const { locale } = ctx;
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      props: {
        locale,
      },
      styles: (
        <>
          {initialProps.styles}
          <style
            dangerouslySetInnerHTML={{
              __html: tailwindcss,
            }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap"
            rel="stylesheet"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;700&display=swap"
            rel="stylesheet"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;800&display=swap"
            rel="stylesheet"
          />

          <meta
            name="google-site-verification"
            content="KHyW2OAlQvDnCveNL1x2KvHDHdbvRo3tD00OqYN3i6w"
          />
          <link rel="icon" type="image/x-icon" href="/favicon-32x32.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
