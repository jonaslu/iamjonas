/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/posts/**/*.md")
      .sort((a, b) => b.date - a.date);
  });
}
