import Document, {Html, Head, Main, NextScript, DocumentContext} from "next/document";
import React from "react";

class PillPetDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  
  render() {
    return (
      <Html lang="ko">
        <Head title="PillPet" />
        <body>
          <div className="container">
            <Main />
          </div>
          <NextScript />
          <div id="modal-root" />
        </body>
      </Html>
    )
  }
}

export default PillPetDocument
