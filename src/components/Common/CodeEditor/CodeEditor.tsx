import Editor from "@monaco-editor/react";
import { Loader } from "../Loader/Loader";

function CodeEditor({
  query = "SELECT * from customers;",
}: {
  query?: string;
}) {
  return (
    <Editor
      loading={<Loader />}
      height="20vh"
      defaultLanguage="sql"
      theme="vs-dark"
      defaultValue={query}
    />
  );
}

export default CodeEditor;
