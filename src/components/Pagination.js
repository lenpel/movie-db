import React from 'react';
import Button from '@material-ui/core/Button';

const Pagination = (props) => {
    const pageLinks = [];

    for(let i=1; i<= props.pages + 1; i++) {
        const active = (props.currentPage+0 === i)? 'secondary': 'default';
        pageLinks.push(
            <Button key={i} color={active} onClick={() => props.nextPage(i)}>
                {i}
            </Button>)
    }

    return(
        <div>
            <ul>
                { props.currentPage > 1? <Button onClick={() => props.nextPage(props.currentPage - 1)}>Prev</Button> : ''}
                { pageLinks }
                { props.currentPage < props.pages + 1? <Button onClick={() => props.nextPage(props.currentPage + 1)}>Next</Button> : ''}
            </ul>
        </div>

    )
}

export default Pagination;
