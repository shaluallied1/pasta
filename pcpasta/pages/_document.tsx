import React from 'react';
import Document, {
  Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            content="width=device-width"
            name="viewport"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700"
            rel="stylesheet"
          />
        </Head>

        <body className="wrapper" style={{ fontStyle: 'Montserrat' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
