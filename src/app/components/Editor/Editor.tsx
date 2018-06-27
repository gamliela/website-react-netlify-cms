import * as React from "react";
import {observer} from "mobx-react";
import {Editor as DraftEditor} from 'draft-js';
import EditorModel from "./EditorModel";

@observer
class Editor extends React.Component<{ model: EditorModel }> {
  render() {
    const {editorState, onChange} = this.props.model;
    return (
      <DraftEditor editorState={editorState} onChange={onChange}/>
    );
  }
}

export default Editor;
