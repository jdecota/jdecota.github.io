import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

import CKEditor from '@ckeditor/ckeditor5-react';
import DocumentEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import Blog from './Blog';

const blogs = [
  'ZO Blog 1',
  'ZO Blog 2',
  'ZO Blog 3'
];
const BOTH = 2;
const DOC_ONLY = 1;

class BlogFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      whatToShow: BOTH,
      nOfBlog: 0
    }
    this.config = {
      toolbar: ["fontSize", "alignment", "fontFamily", "highlight", "bold", "italic", "strikethrough", "underline", "blockQuote", "heading", "link", "numberedList", "bulletedList", "mediaEmbed", "insertTable", "tableColumn", "tableRow", "mergeTableCells", "undo", "redo"]
    }
  }

  renderBlogs() {
    return (
      <div>
        { blogs.map((b, key) => (
          <Blog
            key={key}
            className={this.state.nOfBlog === key ? 'selected' : ''}
            onClick={() => this.setState({ nOfBlog: key })}
            onDoubleClick={() => this.setState({ nOfBlog: key, whatToShow: DOC_ONLY })}
            blog={{title: b}}
          />
        ))}
      </div>
    )
  }
  renderDoc() {
    return (
      <div onDoubleClick={() => this.setState({ whatToShow: BOTH })}>
        <CKEditor
          onInit={ editor => {
              console.log( 'Editor is ready to use!', editor.ui.componentFactory.names() );

              // Insert the toolbar before the editable area.
              editor.ui.getEditableElement().parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
              );
          } }
          onChange={ ( event, editor ) => console.log( { event, editor }, editor.getData()  ) }
          editor={ DocumentEditor }
          config={this.config}
          data={`<h2>Hello ${blogs[this.state.nOfBlog]}!</h2>`}
        />
      </div>
    )
  }
  render() {
    const { whatToShow } = this.state;
    return (
      <SplitterLayout>
        {(whatToShow === BOTH) && this.renderBlogs()}
        {(whatToShow >= DOC_ONLY) && this.renderDoc()}
      </SplitterLayout>
    );
  }
}
 
export default BlogFeed;