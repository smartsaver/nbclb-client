import React from 'react';

/**
 *
 * @param {string} html - html string
 */

function EscapedHtml(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.html }}></div>;
}

export default EscapedHtml;
