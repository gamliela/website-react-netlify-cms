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
        <Editor model={editorModel}/>
      </DefaultLayout>
    );
  }
}

export default NewPostPage;