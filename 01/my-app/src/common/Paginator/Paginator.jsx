import React, {useState} from "react";
import c from './Paginator.module.css'
import classNames from 'classnames';


const Paginator = ({totalItemCount, portionSize = 10, ...props}) => {

    let pagesCount = Math.ceil(totalItemCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={c.paginator}>
            {portionCount > 1 &&
            <div className={c.pageNumber} onClick={() => {setPortionNumber(portionNumber-1)}}>Prev</div>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <div className={classNames(props.currentPage === p && c.selectedPage, c.pageNumber)}
                            key={p}
                            onClick={(e) => {
                                props.onPageChanged(p);
                            }}>
                    {p}
                </div>
            })}
            {portionCount >portionNumber &&
                <div className={c.pageNumber} onClick={() => {setPortionNumber(portionNumber+1)}}>Next</div>}
        </div>
    )
};

export default Paginator;


