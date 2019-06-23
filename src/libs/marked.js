import marked from 'marked';

const defaultOption = {
  gfm: true,
};

function markedWithDefault(str, option = defaultOption) {
  return marked(str, option);
}

export default markedWithDefault;
