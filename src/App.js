import './App.css';
import { useState } from 'react';
import MarkdownPreview from './MarkdownPreview.js';

function App() {
  const initialMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

### And here's some other cool stuff:

`
  const [postEditor, setPostEditor] = useState(initialMarkdown);
  const [editorWrap, setEditorWrap] = useState(true);
  const [previewWrap, setPreviewWrap] = useState(true);

  return (

    <div className="App">
      <div>
        <div className={`editorWrap ${previewWrap ? '' : 'none'}`}>
          <div className="foolbar">
            <i className="fa-brands fa-free-code-camp"></i>
            <span id="editor-previewer">Editor</span>
            <i onClick={() => setEditorWrap((prevEditor) => !prevEditor)} className={editorWrap ? 'fa fa-arrows-alt' : 'fa fa-compress'}></i>
          </div>
          <textarea id="editor" value={postEditor} onChange={e => setPostEditor(e.target.value)} className={`${editorWrap ? '' : 'height-textarea'}`}></textarea>
        </div>
        <div className={`previewWrap ${editorWrap ? '' : 'none'} ${previewWrap ? '' : 'height'}`}>
          <div className="foolbar">
            <i className="fa-brands fa-free-code-camp"></i>
            <span id="editor-previewer">Previewer</span>
            <i onClick={() => setPreviewWrap((prevPreview) => !prevPreview)} className={previewWrap ? 'fa fa-arrows-alt' : 'fa fa-compress'}></i>
          </div>
          <div id="preview" className={`${previewWrap ? '' : 'height'}`}>
            <MarkdownPreview markdown={postEditor} />
          </div>
        </div>
      </div>
    </div >
  );

}





export default App;
