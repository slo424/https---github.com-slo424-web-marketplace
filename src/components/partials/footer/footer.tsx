import React, { Component } from "react";
import "./footer.css";

type FooterProps = {
  //
};

class FooterComponent extends Component<FooterProps, any> {
  public render() {
    function goToInfoPage(arg0: string): React.MouseEventHandler<HTMLParagraphElement> | any {
      // throw new Error("Function not implemented.");
    }

    return (
      <div id="footer">
        <div className="main-footer">
            <div>
                <ul className=" mt-xxl-5">
                    <li>
                        <h2>Sample</h2>
                    </li>
                    <li><p onClick={goToInfoPage('PrivacyPolicy')} className="terms">Privacy Policy</p></li>
                    <li><p onClick={goToInfoPage('TermsConditions')} className="terms">Terms & Conditions</p></li>
                    <li><p onClick={goToInfoPage('ContactUs')} className="terms">Contact Us</p></li>
                </ul>
            </div>
            <p className="terms-conditions mt-5">
                Designated trademarks and brands...
            </p>
        </div>
        <div className="copyright-footer">
            Copyright © 2025 Blah Inc. All rights reserved.
        </div>
    </div>
    );
  }
}

export default FooterComponent;
