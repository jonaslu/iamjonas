export default {
    permalink: ({ page: { filePathStem } }) => filePathStem.replace("/pages", "/p") + ".html",
  };
  