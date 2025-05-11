import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

const RSS_FEED_ITEM_COUNT = 10;

function getAllPosts(collectionsApi) {
  return collectionsApi.getFilteredByGlob("src/posts/**/*.md").sort((a, b) => b.date - a.date);
}

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");

  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addFilter("intlPostDate", (date) =>
    new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date)
  );

  eleventyConfig.addCollection("posts", (collectionsApi) => {
    return getAllPosts(collectionsApi);
  });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addCollection("rssItems", function (collectionsApi) {
    const posts = getAllPosts(collectionsApi).splice(0, RSS_FEED_ITEM_COUNT);
    const rssItems = collectionsApi.getFilteredByGlob("src/feed/*.md");
    return [...posts, ...rssItems].sort((a, b) => b.date - a.date);
  });
}
