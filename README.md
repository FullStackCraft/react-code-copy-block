# react-code-copy-block

## Installation

Install with:

`npm install --save react-code-copy-block`

## Usage

```javascript
import ReactCodeCopyBlock from 'rect-code-copy-block';

...

render() {
  return (
    <div>
      ...
      <ReactCodeCopyBlock sLanguage="javascript">
        var array1 = ['a', 'b', 'c'];

        array1.forEach(function(element) {
        console.log(element);
        });
      </ReactCodeCopyBlock>
    </div>
  )
}
```

## Description  

A useful React component that combines `react-copy-to-clipboard`, `react-toastify`, and `react-syntax-highlighter` to bring you copiable code snippets with popup feedback:

![A gif of the react-code-copy-block in action](./assets/example-gif.gif)

Works on Desktop, Mobile, and Tablet - the styles will make it so that the code field fills the width of it's container! (Looks nicest within fixed with or max-width containers.)

Works great in Gatsby JS blogs! (At least for .js style posts; won't work in markdown posts of course!)

## Styling

Styles are Monokai-ish and with default as follows:

```css
.reactCodeCopyBlock--Container {
  position: relative;
}

.reactCodeCopyBlock--Button {
  cursor: pointer;
	background-image: gray;
	border-radius: 60px;
  box-sizing: border-box;
	color: gray;
	display: block;
	font: 1.125rem 'Montserrat', Arial, sans-serif; /*18*/
  font-weight: bold;
	height: 60px;
	margin: 0 auto;
	padding: 6px;
	position: absolute;
  text-decoration: none;
	width: 60px;
	z-index: 999;
  right: 10px;
  bottom: 10px;
}

.reactCodeCopyBlock--Button span {
	align-items: center;
	background: #ffffff;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	height: 100%;
	transition: background .5s ease;
	width: 100%;
}

.reactCodeCopyBlock--Button:hover span {
	background: white;
}

.reactCodeCopyBlock--Notification {
  background: gray;
  color: #ffffff;
}
```