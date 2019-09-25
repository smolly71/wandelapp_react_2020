import React, {Component} from 'react';
import {posttextfile} from './rest_routes';

class UploadRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
  }
  // zie https://www.js-tutorials.com/react-js/learn-react-file-upload-in-5-minute/
  onChangeHandler = (event) => {
    const file = event.target.files[0];
    this.setState({
      selectedFile: file
    });
  }

  fileUploadHandler = () => {
    const cuid = 'test';
    const remoteServer = 'https://wandelappbackend-v5.herokuapp.com';
    posttextfile(remoteServer + '/upload?cuid=' + cuid, this.state.selectedFile)
      .then(
        () => {
          console.log('succecolle upload')
        }
      )
      .catch(
        (e) => {
          console.log('fout met upload' + e);
        }
      );
  };

  render() {
    return (
      <div>
        <label>Upload Your File </label>
        <input type="file" onChange={this.onChangeHandler}/>
        <button type="button" className="btn btn-info" onClick={this.fileUploadHandler}>Upload File</button>
      </div>
    );
  }
}

export default UploadRoute;
