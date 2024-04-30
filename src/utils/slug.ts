import slugify from "slugify";

export const slugGenerate = (name: string, id: string) => {
  const path = slugify(name, {
    lower: true,
    locale: "vi",
  });

  return `${path}-${id}.html`;
};

export const slugDecode = (path: string) => {
  const paths = path.split("/");

  const url = paths[2].slice(0, -5);

  const uuidRegex =
    /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;
  const matches = url.match(uuidRegex);

  if (matches) {
    return matches[0];
  } else {
    return null;
  }
};
