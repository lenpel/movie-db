import React from 'react';
import {Paper, InputBase, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchBox = (props) => {
    return (
        <form action='' onSubmit={props.handleSubmit}>
            <Paper elevation={1} style= {{
                padding: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                }}>
                <InputBase autoFocus onChange={props.handleChange} style={{
                    marginLeft: 8,
                    flex: 1
                    }} placeholder='Search movie'/>
                <IconButton type='submit' aria-label="Search" style={{ padding: 10}}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </form>
    )
}

export default SearchBox;
