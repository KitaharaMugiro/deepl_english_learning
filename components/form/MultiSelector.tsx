import { FormControl, InputLabel, Select, Input, Chip, MenuItem } from "@material-ui/core";
import React from "react"


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name: string, personName: string[]) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? 400
                : 800,
    };
}

interface Props {
    title: string
    selected: string[]
    options: string[]
    onChange: (selected: string[]) => void
}

export default (props: Props) => {
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.onChange(event.target.value as string[]);
    };

    return (
        <FormControl>
            <InputLabel id="demo-mutiple-chip-label">{props.title}</InputLabel>
            <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={props.selected}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}>
                        {(selected as string[]).map((value) => (
                            <Chip key={value} label={value} style={{ margin: "2px" }} />
                        ))}
                    </div>
                )}
                MenuProps={MenuProps}
            >
                {props.options.map((name) => (
                    <MenuItem key={name} value={name} style={getStyles(name, props.selected)}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}