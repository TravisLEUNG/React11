import React from "react";
import image from "../images/photo-grid.png"

export default function ImagesGroup() {
  return (
    <section className="images-group">
      <img src={image} className="image" />
    </section>
  );
}
