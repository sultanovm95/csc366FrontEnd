import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import Box from '@mui/material/Box';

const fileTypes = ['PDF', 'DOCS', 'CSV'];

export const DragAndDrop = () => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <Box
            width="100%"
            style={{
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}
        >
            <FileUploader
                fullWidth
                multiple={false}
                handleChange={handleChange}
                name="file"
                types={fileTypes}
            />
            <p>
                {file ? `File name: ${file[0].name}` : 'No files uploaded yet'}
            </p>
        </Box>
    );
};
