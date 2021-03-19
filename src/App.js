import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [text, setText] = useState(
    `# Hello React!

  ## React app h2 markdown

  **bold text**
  
  * Simple List
  * Item 2
  
  ![Image](https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg)
  
  > Blockquote here

  [react page](https://reactjs.org/)
  
  [react-markdown](https://github.com/remarkjs/react-markdown)
  
  
  
      # code block
      print '3 backticks or'
      print 'indent 4 spaces'
  
    
  `.concat("`inline code` example")
  );
  return (
    <div className="container h-100">
      <h1 className="text-center">FreeCodeCamp - FrontEnd Libraries</h1>
      <h2 className="text-center my-4">Markdown Previewer</h2>
      <div className="row mt-5">
        <div className="col-md-6 col-sx-12 mt-3">
          <div className="form-floating">
            <textarea
              value={text}
              className="form-control"
              placeholder="Write markdown here"
              id="editor"
              style={{ height: "300px" }}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="col-md-6 col-sx-12 mt-3" id="preview">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
