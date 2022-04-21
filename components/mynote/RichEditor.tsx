import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { useState } from 'react';

interface Props {
    editorState: EditorState
    setEditorState: (editorState: EditorState) => void
}

export default (props: Props) => {
    const { editorState, setEditorState } = props;
    const selectedFormat = editorState
        .getCurrentInlineStyle()

    const handleKeyCommand = (command: any) => {
        console.log({ command })
        const newState = RichUtils.handleKeyCommand(
            editorState,
            command
        );
        if (newState) {
            setEditorState(newState);
            return "handled";
        }
        return "not-handled";
    };

    const onClick = (style: string) => {
        console.log({ onClick: style })
        setEditorState(RichUtils.toggleInlineStyle(
            editorState,
            style
        ));
    }

    return <>
        <ToggleButtonGroup
            value={selectedFormat.toArray()}
            aria-label="text formatting"
            size="small"
        >
            <ToggleButton value="BOLD" aria-label="BOLD" onClick={() => onClick("BOLD")}>
                <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="ITALIC" aria-label="ITALIC" onClick={() => onClick("ITALIC")}>
                <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="UNDERLINE" aria-label="UNDERLINE" onClick={() => onClick("UNDERLINE")}>
                <FormatUnderlinedIcon />
            </ToggleButton>
        </ToggleButtonGroup>
        <div style={{ height: 15 }} />
        <Editor
            handleKeyCommand={handleKeyCommand}
            editorState={editorState}
            onChange={setEditorState}
            placeholder="ここにメモを残す"
            data-content-editable-leaf="true"
        />
    </>
}