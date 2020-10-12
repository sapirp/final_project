import React, { Component } from 'react';
import axios from 'axios';

import "./Form.css"



class SubmitFile extends Component {
    buttonStyle = {
        borderRadius: "5px",
        backgroundColor: "#f8ddf0",
        color: "#686266",
        border: "0.5px #fff solid",
        fontSize: "16px"
    }

    state = {
        // Initially, no file is selected 
        selectedFile: null
    };

    // On file select (from the pop up) 
    onFileChange = event => {
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] });
    };

    // On file upload (click the upload button) 
    onFileUpload = () => {
        // Create an object of formData 
        const formData = new FormData();

        // Update the formData object 
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file 
        // console.log(this.state.selectedFile);

        // Request made to the backend api 
        // Send formData object 
        axios.post("api/uploadfile", formData);
    };


    // File content to be displayed after 
    // file upload is complete 
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>פרטי הקובץ:</h2>
                    <p>שם הקובץ: {this.state.selectedFile.name}</p>
                    <p>סוג הקובץ: {this.state.selectedFile.type}</p>
                    <p> עודכן לאחרונה:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4 className="form-label">לאחר בחירת הקובץ יש ללחוץ על העלה</h4>
                </div>
            );
        }
    };

    render() {

        return (
            <div className="labels-look">
                <h3 className="form-label"> העלאת מסמכים רפואיים מהביקור</h3>
                <div>
                    <input className="input-tag" type="file" onChange={this.onFileChange} />
                    <button style={this.buttonStyle} onClick={this.onFileUpload}>
                        העלה!
				</button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default SubmitFile; 
