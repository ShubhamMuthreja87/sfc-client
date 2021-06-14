import React from "react";
import Dropzone from 'react-dropzone';
import {
    Grid, Divider, Box,
    Button, Card, CardContent, CardHeader,
} from "@material-ui/core";

function UploadDocs(props) {
    const [file, setFile] = React.useState(null);
    const [previewSrc, setPreviewSrc] = React.useState('');
    const [isPreviewAvailable, setIsPreviewAvailable] = React.useState(false);

    const dropRef = React.useRef();


    const onDrop = (files) => {
        const [uploadedFile] = files;
        setFile(uploadedFile);

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
        dropRef.current.style.border = '2px dashed #e9ebeb';
    };

    const updateBorder = (dragState) => {
        if (dragState === 'over') {
            dropRef.current.style.border = '2px solid #000';
        } else if (dragState === 'leave') {
            dropRef.current.style.border = '2px dashed #e9ebeb';
        }
    };

    function handleOnSubmit() {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            props.upload(formData);
        } else {
            alert('Please select a file to add.');
        }
    }

    function getFileName(name) {
        if (name.length > 30) {
            return (name.substring(0, 30) + "...");
        } else {
            return (name);
        }
    }
    return (
        <div className="margins">
            <Card>
                <CardHeader
                    subheader={props.subheader}
                    title={props.title}
                />
                <Divider />
                <CardContent>
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" >
                        <Grid item sm={6} xs={12}>
                            <div className="upload-section">
                                <Dropzone
                                    onDrop={onDrop}
                                    onDragEnter={() => updateBorder('over')}
                                    onDragLeave={() => updateBorder('leave')}
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                                            <input {...getInputProps()} />
                                            <p>Drag and drop a file OR click here to select a file</p>
                                            {file && (
                                                <div>
                                                    <strong>Selected file:</strong> {getFileName(file.name)}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </Dropzone>
                            </div>
                        </Grid>
                        <div className="preview-section">
                            <Grid item sm={6} xs={12}>
                                {previewSrc ? (
                                    isPreviewAvailable ? (
                                        <div className="image-preview">
                                            <img className="preview-image" src={previewSrc} alt="Preview" />
                                        </div>
                                    ) : (
                                        <div className="preview-message">
                                            <p>No preview available for this file</p>
                                        </div>
                                    )
                                ) : (
                                    <div className="preview-message">
                                        <p>Image preview will be shown here after selection</p>
                                    </div>
                                )}
                            </Grid>
                        </div>

                    </Grid>
                    <Divider />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            p: 2,
                        }}
                    >
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={handleOnSubmit}>
                            Upload
                </Button>
                    </Box>
                </CardContent>
            </Card>
        </div>


    );
}
export default UploadDocs;