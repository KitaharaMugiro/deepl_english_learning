import { Button, Drawer, Fab, List, ListItem } from "@mui/material"
import { useEffect, useState } from "react";

interface Props {
    skippedWords: { id: number, word: string }[]
}

export default (props: Props) => {
    const anchor = "right"
    const [state, setState] = useState(false);
    const [color, setColor] = useState<"default" | "primary">("default")

    useEffect(() => {
        if (props.skippedWords.length > 0) {
            setColor("primary")
        }
    }, [props.skippedWords])

    const renderWordList = () => {
        return <div>
            <List style={{ width: 100 }}>
                {props.skippedWords.map(word => <ListItem key={word.id}>{word.word}</ListItem>)}
            </List>
        </div>
    }

    const toggleDrawer =
        (anchor: any, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setColor("default")
                setState(open);
            };

    return <div>
        <Fab variant="extended"
            color={color}
            style={{ position: "fixed", bottom: "10px", right: "10px" }}
            onClick={toggleDrawer(anchor, true)}>
            Skipped Words
        </Fab>
        <Drawer
            anchor={anchor}
            open={state}

            onClose={toggleDrawer(anchor, false)}
        >
            {renderWordList()}
        </Drawer>
    </div>
}