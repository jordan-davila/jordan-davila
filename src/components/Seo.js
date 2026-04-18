import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "Jordan Davila";
const DEFAULT_DESCRIPTION =
    "Designing and developing unique, engaging digital experiences.";

function Seo({ title, description }) {
    const fullTitle = title ? `${title} - ${SITE_NAME}` : SITE_NAME;
    const metaDescription = description || DEFAULT_DESCRIPTION;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
        </Helmet>
    );
}

export default Seo;
