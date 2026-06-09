import { defineType, defineField } from "sanity";

export const certificationSchema = defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Certificate Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "issuer", title: "Issuing Organization", type: "string" }),
    defineField({ name: "year", title: "Year / Duration", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "credentialUrl", title: "Credential URL", type: "url" }),
    defineField({ name: "badgeImage", title: "Badge Image", type: "image" }),
  ],
});
