import './CategoryPage.css';
import { useEffect, useState } from 'react';

import { createStructuredSelector } from "reselect"
import { connect } from "react-redux";
import { compose } from 'recompose';

import { filterBook, selectBooks } from './bookstore/selector';
import { getAllBookAction, filterBookAction } from './bookstore/action';

import { Link } from 'react-router-dom';

function CategoryPage(props) {
    const { getAllBookDispatch, getDisplayBookDispatch } = props
    const { listBook, displayBook } = props
    useEffect(() => {
        //getAllBookDispatch();
        getDisplayBookDispatch();
    }, [])
    return (
        <>
            {console.log(displayBook)}
            <header>
                <h1>SÁCH HAY</h1>
                <hr />
            </header>
            {/* <div className="publish-nav">
                <ul>
                    <li><Link to='/publish/publish-news'>TIN TỨC XUẤT BẢN</Link></li>
                    <li><Link to='/publish/books'>SÁCH HAY</Link></li>
                    <li><Link to='/publish/research-publish'>NGHIÊN CỨU XUẤT BẢN</Link></li>
                    <li><Link to='/publish/publish-author'>TÁC GIẢ</Link></li>
                </ul>
            </div> */}
            <div className="book-content">

                <div className="book-content-left">
                    {
                        displayBook.slice(0, 1).map(item =>
                            <Link className="book-left-item" to={`/publish/books/${item.id}`} key={`books-${item.id}`}>
                                <img src={item.imgsrc} className="book-left-item-img" alt={item.imgalt} />
                                <h1>{item.title}</h1>
                                <p>{item.introduction}</p>
                            </Link>
                        )
                    }
                </div>

                <div className="book-content-right">
                    {displayBook.slice(1, 3).map(item =>
                        <Link className="book-right-item" to={`/publish/books/${item.id}`} key={`books-${item.id}`}>
                            <img src={item.imgsrc} className="book-right-item-img" alt={item.imgalt} />
                            <h3>{item.title}</h3>
                        </Link>
                    )}
                </div>
            </div>
            <div className="book-content-bottom">
                {displayBook.slice(3).map(item =>
                    <Link className="book-content-bottom-item" to={`/publish/books/${item.id}`} key={`books-${item.id}`}>
                        <img src={item.imgsrc} className="book-bottom-item-img" alt={item.imgalt} />
                        <h4>{item.title}</h4>
                    </Link>
                )}
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    listBook: selectBooks,
    displayBook: filterBook
})

const mapDispatchToProps = (dispatch) => ({
    getAllBookDispatch: (payload) => dispatch(getAllBookAction(payload)),
    getDisplayBookDispatch: (payload) => dispatch(filterBookAction(payload))
})
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(CategoryPage);