import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
    require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/works";
import "./scripts/reviews";
import "./scripts/parallaxup";
import "./scripts/parallaxbottom";
import "./scripts/menu";