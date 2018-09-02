import * as React from "react";
import {observer} from "mobx-react";
import DefaultLayout from "../layouts/DefaultLayout";
import Editor from "../../components/Editor/Editor";
import EditorModel from "../../components/Editor/EditorModel";

const editorModel = new EditorModel();

@observer
class NewPostPage extends React.Component<{}> {
  render() {
    return (
      <DefaultLayout>
        <div className="section">
          <h1 className="title">New Post</h1>
          <button className="button">Save Draft</button>
          <Editor model={editorModel}/>
        </div>
      </DefaultLayout>
    );
  }
}

export default NewPostPage;