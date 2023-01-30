import React from "react";
import {
  RichTextEditorComponent,
  Inject,
  Image,
  Link,
  HtmlEditor,
  Toolbar,
  QuickToolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { Headers } from "../components";
import { EditorData } from "../data/dummy";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Headers category="App" title="Editor" />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
