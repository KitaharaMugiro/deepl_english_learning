import { AppBar, Toolbar, Typography } from "@material-ui/core"
import React from "react"

export default () => {
    return (
        <AppBar position="absolute" color="default" style={{ position: 'relative' }}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    LearningEnglish
                </Typography>
            </Toolbar>
        </AppBar>
    )
}