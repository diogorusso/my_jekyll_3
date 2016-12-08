
module.exports = {
  watch: {
    jekyll: [
      '_config/**/*.*',
      '_dev/_config.yml',
      '_dev/_config_dev.yml',
      '_dev/_includes/**/*.*',
      '_dev/_layouts/**/*.*',
      '_dev/_posts/**/*.*',
      '_dev/_data/**/*.*',
      '_dev/lib/**/*.*',
      '_dev/work/**/*.*',
      '_dev/*.html',
      '_dev/*.md',
    ],

    psd: [
      '_assets/_imgs/*.psd'
    ],

    imgs: [
      '_dev/_assets/_imgs/**/*.*'
    ],

    scripts: [
      '_dev/_assets/_scripts/**/*.*'
    ],

    sass: [
      '_dev/_assets/_sass/**/*.scss'
    ],
  }
};
