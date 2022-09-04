import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import tailwind from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/styles.scss";

CMS.registerPreviewStyle(tailwind, { raw: true });
CMS.registerPreviewStyle(styles, { raw: true });
CMS.init();
