import { TextField } from "@mui/material"
import { useState } from "react"
import { useSavePhraseMutation } from "../../src/generated/graphql"

export default () => {

    const [savePhraseMutation] = useSavePhraseMutation()

    const [phrase, setPhrase] = useState("")
    const [description, setDescription] = useState("")

    const onSave = async () => {
        await savePhraseMutation({
            variables: {
                phrase,
                description
            }
        })
    }

    return (
        <div>
            <h1>Register</h1>
            <TextField value={phrase} onChange={(e) => setPhrase(e.target.value)}></TextField>
            <TextField value={description} onChange={(e) => setDescription(e.target.value)}></TextField>
            <button onClick={onSave}>Save</button>
        </div>
    )
}