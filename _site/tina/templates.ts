import type { TinaField } from "tinacms";
export function aboutFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ] as TinaField[];
}
export function galleryFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "gallery",
      label: "Gallery",
      list: true,
    },
  ] as TinaField[];
}
export function studiesFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "thumb",
      label: "Thumb",
    },
    {
      type: "string",
      name: "role",
      label: "Role",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "timeframe",
      label: "Project timeframe",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "string",
      name: "medium",
      label: "Medium",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "link",
      label: "Link",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
  ] as TinaField[];
}
