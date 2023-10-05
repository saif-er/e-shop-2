import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { saveFullDescription } from '../redux/actions/add-new-product';
import { toast } from 'react-toastify';

const TinyEditor = ({ fullProductDetails, setFullProductDetails }) => {
  const editorRef = useRef(null);

  const editorChangeHandler = (newValue, editor) => {
    let fullDescriptionStr = editor.getContent();
    // let fullDescriptionStr = editorRef.current.getContent();
    setFullProductDetails(fullDescriptionStr);
  };

  return (
    <>
      <Editor
        apiKey={process.env.REACT_APP_TINY_API_KEY}
        // apiKey='suupfl25ycnno16lor0unpo0nu5ra4v5forlrcx45kxx39vv'
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue='<p>This is the initial content of the editor.</p>'
        init={{
          height: 1000,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
        value={fullProductDetails}
        onEditorChange={editorChangeHandler}
      />
      {/* <button
        className='mt-2 cursor-pointer appearance-none text-center block w-auto px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        onClick={log}
      >
        Save Product Detail
      </button> */}
    </>
  );
};

export default TinyEditor;
