import { useState } from "react";
import { marked } from "marked";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faMaximize,
  faDisplay,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [content, setContent] = useState(`
# A Markdown Previewer!
### Created by Raven Ringel
***
**Here are some \`syntax\` guide:**
***
# This is a Heading h1
## This is a Heading h2
### This is a Heading h3
**And so on.**
***
You can have a **bold** text!
You can also have an _italic_ text!
This is a <sup>superscript</sup>
This is a <sub>subscript</sub>
***
To create a blockquote, add a \`>\` in front of a paragraph.
> Dorothy followed her through many of the beautiful rooms in her castle.
***
You can make your own ordered list

1. Html
2. Css
3. JavaScript

Or an unordered list.

- Vite
- React
- Tailwind

Wait! There's more, you can also add a checklist!

- [x] Pratice code
- [ ] Play Games
- [ ] Procrastinate

***
A \`code\` tag like \`<h1>hello World</h1>\`.

Or a **Blocks of Code** like
\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`
***
### Image
![A Cat!](http://www.rucniprace.cz/k_v/vzory/cerna_kocka.jpg)
**Definitely a Cat!**
_Awesome right!_
***
_That's All!_

Learn more about Markdown in this [link](https://www.markdownguide.org/cheat-sheet/).

`);

  marked.setOptions({
    breaks: true,
  });

  const handleTextChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <>
      <div id="container">
        <div id="editorWrapper">
          <div id="editorBar">
            <div id="editorFullBar">
              <div id="editorRightBar">
                <FontAwesomeIcon icon={faPenToSquare} />
                <p>Editor</p>
              </div>
              <FontAwesomeIcon
                className="fullScreen"
                icon={faMaximize}
                style={{ visibility: "hidden" }}
              />
            </div>
          </div>
          <textarea
            id="editor"
            onChange={handleTextChange}
            value={content}
          ></textarea>
        </div>
        <div id="previewerWrapper">
          <div id="previewerBar">
            <div id="previewerFullBar">
              <div id="previewerRightBar">
                <FontAwesomeIcon icon={faDisplay} />
                <p>Previewer</p>
              </div>
              <FontAwesomeIcon
                className="fullScreen"
                icon={faMaximize}
                style={{ visibility: "hidden" }}
              />
            </div>
          </div>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
