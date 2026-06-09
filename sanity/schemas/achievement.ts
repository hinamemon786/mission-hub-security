import { defineType, defineField } from "sanity";

export const achievementSchema = defineType({
  name: "achievement",
  title: "Achievement / CTF",
  type: "document",
  fields: [
    defineField({ name: "rank", title: "Rank / Position", type: "string" }),
    defineField({ name: "event", title: "Event Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "color",
      title: "Card Color",
      type: "string",
      options: { list: ["gold", "silver", "bronze"] },
    }),
    defineField({ name: "linkedinPost", title: "LinkedIn Post URL", type: "url" }),
  ],
});
