import postcss from 'postcss';

interface PrependImportUrlOptions {
  urls: string[];
}

module.exports = postcss.plugin<PrependImportUrlOptions>("prepend-import-urls", (opts) => {
  return (css) => {
    if (opts?.urls) {
      opts.urls.forEach(url => {
        css.prepend(`@import url("${url}");`);
      });
    }
  };
});