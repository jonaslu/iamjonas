export default {
  permalink: ({ page: { filePathStem } }) => filePathStem.replace("/posts", "") + ".html",
  layout: "post",
};
