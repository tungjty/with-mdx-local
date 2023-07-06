import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = path.join(process.cwd(), "pages", "blog");

export const getPostFrontMatter = (slug) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(root, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const meta = {
    ...data, // this is the frontmatter
    slug: realSlug,
  };
  // console.log({ meta });
  return meta;
};

export const getAllPostsMeta = () => {
  const slugs = fs.readdirSync(root);
  const posts = slugs.map((slug) => getPostFrontMatter(slug));
  return posts;
};
