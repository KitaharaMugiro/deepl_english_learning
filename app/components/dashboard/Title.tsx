import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export default function Title(props: any) {
    return (
        <Typography variant="h6" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
}

Title.propTypes = {
    children: PropTypes.node,
};