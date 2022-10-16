import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

    const [value, setValue] = useState('');

    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder='Title' />
                <div className="editorContainer">
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status:</b> Draft
                    </span>
                    <span>
                        <b>Visbility:</b> Public
                    </span>
                    <input style={{ display: "none" }} type="file" id="file" name="" />
                    <label htmlFor="file">Upload Image</label>
                </div>
                <div className="item">i2</div>
            </div>
        </div>
    )
}

export default Write
