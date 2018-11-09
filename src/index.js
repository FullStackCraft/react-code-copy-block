import React from 'react'
import PropTypes from 'prop-types'

// third party assets
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles/hljs';
import { ToastContainer, toast } from 'react-toastify';
import SVG from 'react-inlinesvg';
import 'react-toastify/dist/ReactToastify.css';

// custom assets
import './styles/styles.css';
import CopySVG from './images/copy.svg';

class ReactCodeCopyBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      bCopied: false
    };
    this.notify = this.notify.bind(this);
  }
  notify() {
    toast.info("Code copied to clipboard!", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
  render () {  
    // style so it matches the CSS styles for gatsby prism plugin (oCustomStyle is applied to the wrapping <pre> tag of each code peice)
    const oCustomStyle = this.props.oCustomStyle || {
      'padding': '1em',
      'margin': '.5em 0',
      'overflow': 'auto',
      'borderRadius': '0.3em'
    }
    return (
      <div className="reactCodeCopyBlock--Container">
        <SyntaxHighlighter language={this.props.sLanguage} style={monokaiSublime} customStyle={oCustomStyle}>
        {this.props.children}
        </SyntaxHighlighter>    
        <CopyToClipboard text={this.props.children}
          onCopy={this.notify}>
          <a className="reactCodeCopyBlock--Button">
            <span width="25px" style={{marginBottom: '0px'}}><SVG src={CopySVG} width={'25px'} height={'25px'}/></span>
          </a>
        </CopyToClipboard>
        <ToastContainer autoClose={2000} hideProgressBar={true} pauseOnHover={false} closeButton={false}/>
      </div>
    );
  }
}

export default ReactCodeCopyBlock;