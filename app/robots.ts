import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
return {
rules: {
userAgent: "*",
allow: "/",
},
sitemap: "https://samea-portfolio.vercel.app/sitemap.xml",
};
}
