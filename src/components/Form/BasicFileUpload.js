import React, {useState, useEffect} from 'react';
import {FormGroup, Dropzone, FileUploadInput, FileUploadIcon, FileUploadText} from './style';
import {PDFRender} from '../Form';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const BasicFileUpload = (props) => {
  const [file, setFile] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);
  const [fileLoading, setFileLoading] = useState(true);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [icon, setIcon] = useState(props.icon);

  useEffect(() => {
    if(file) {
      setFileLoading(false);
      setUploadSuccess(true);  
    }
  }, [file])

  useEffect(() => {
    if(file && !fileLoading && props.successIcon){
      setIcon(props.successIcon)
    } else {
      setIcon(props.icon);
    }
  }, [fileLoading])

  useEffect(() => {
    if(Object.keys(props.data).length && !fileSelected) {
      handleFileLoadFromUrl();
    }
  }, [props.data])

  const handleFileLoadFromUrl = () => {
    if(props.data[props.id].url) {
      setFile(props.data[props.id]);
    } else {
      setFileLoading(false);
      setUploadSuccess(false);
    }
  }

  const handleFileChange = async (e) => {
    e.persist()
    if(!e.target.files.length){
      return true;
    }
    setFileLoading(true);
    setFileSelected(true);
    let selFile = e.target.files;
    props.onChange(selFile).then((selectedFile) => {
      let url = selectedFile ? URL.createObjectURL(selectedFile[0]) : null
      setFile({...file, url, name: selFile[0].name, type: selFile[0].type})
    })
  }

  const getText = () => {
    let {text, id, upload} = props;
    if(props.data[props.id].name  && !fileSelected) {
      return props.data[props.id].name;
    }

    if (uploadSuccess && upload && upload[id]) {
      return upload[id].image.name
    } else {
      return text
    }
  }
    
  return (
    <FormGroup>
      <Dropzone>
        <div style={{height: '0px',}}>
          {!!file && file.url && file.type === "application/pdf" && !props.reset
            /* <PDFRender url={file.url}></PDFRender>*/
          }
          {!!file && file.url && file.type !== "application/pdf" && !props.reset &&
            <img src={file.url} width={264} height={200} mode='fit'/>
          }
        </div>
        <FileUploadInput type="file" onChange={handleFileChange}/>
        <div style={{marginTop: "-170px"}}>
          {
            
            fileLoading ? (
              <React.Fragment>
                <FileUploadIcon icon={icon ? icon : faCamera}/>
                <FileUploadText>Loading...</FileUploadText>
              </React.Fragment>
            )
            : (
            <React.Fragment>
              <FileUploadIcon icon={icon ? icon : faCamera}  success={uploadSuccess} />
              <FileUploadText>{getText()}</FileUploadText>
            </React.Fragment>
            )
          }
        </div>
      </Dropzone>
    </FormGroup>
  );
};

export default BasicFileUpload;