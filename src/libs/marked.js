import marked from 'marked';

// open links in new tab
var renderer = new marked.Renderer();
renderer.link = function() {
  var link = marked.Renderer.prototype.link.apply(this, arguments);
  return link.replace('<a', "<a target='_blank' rel='noreferrer noopener'");
};

const defaultOption = {
  gfm: true,
  renderer,
};

function markedWithDefault(str, option = defaultOption) {
  return marked(str, option);
}

export default markedWithDefault;
