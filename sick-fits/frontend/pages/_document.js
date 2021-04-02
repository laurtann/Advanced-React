import Document, { Html, Head, NextScript, Main } from 'next/document';

// ability to do custom HTML attributes and add CSS to head
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-CA">
        {/* <Head></Head> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
