import {EditorState} from 'draft-js';
import {action, observable} from "mobx";

class EditorModel {
  @observable editorState = EditorState.createEmpty();

  @action.bound
  onChange(newEditorState) {
    this.editorState = newEditorState;
  }
}

export default EditorModel;
