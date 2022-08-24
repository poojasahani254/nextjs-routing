import Document, { Html, NextScript, Main, Head } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html en={"us"}>
        <Head />
        <body>
          <Main />
          <div className={"overlay"}/>
          <NextScript />
        </body>
      </Html>
    );
  }
}
