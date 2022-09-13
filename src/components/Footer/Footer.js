import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__authorAttrib">
        <h3 className="Footer__authorAttrib__metaTitle">
          DESIGN, APP, WEBSITE BY:
        </h3>
        <h3 className="Footer__authorAttrib__title">MUNRHALLS 2022.</h3>
      </div>

      <div className="Footer__attribs">
        <h3 className="Footer__attribs__metaTitle">ICONS BY:</h3>
        <div className="Footer__attribs__container">
          <a
            className="Footer__attribs__container__link"
            target="_blank"
            href="https://www.flaticon.com/free-icons/pirate-ship"
            title="pirate ship icons"
          >
            Pirate ship icons created by Amethyst prime - Flaticon
          </a>
        </div>
      </div>
    </div>
  );
}
