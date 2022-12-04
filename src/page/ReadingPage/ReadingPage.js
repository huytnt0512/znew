import './ReadingPage.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { connect } from "react-redux";
import { compose } from 'recompose';

import { asyncGetDetailLeftAction } from '../IndexPage/leftstore/action';
import { asyncGetDetailMiddleAction } from '../IndexPage/middlestore/action';
import { asyncGetDetailRightAction } from '../IndexPage/rightstore/action';
import { asyncGetDetailBookAction } from '../CategoryPage/bookstore/action';

function ReadingPage(props) {
    const { getDetailLeftDispatch, getDetailMiddleDispatch, getDetailRightDispatch, getDetailBookDispatch } = props
    const [pageData, setPageData] = useState({});
    const { category, id } = useParams();
    useEffect(() => {
        const initialData = async (id) => {
            if (category === 'left') {
                const response = await getDetailLeftDispatch(id)
                setPageData(response.data)
            } else if (category === 'middle') {
                const response = await getDetailMiddleDispatch(id)
                setPageData(response.data)
            } else if (category === 'right') {
                const response = await getDetailRightDispatch(id)
                setPageData(response.data)
            } else if (category === 'books') {
                const response = await getDetailBookDispatch(id)
                setPageData(response.data)
            }
        }
        initialData(id);
    }, [])
    return (
        <>
            {/* <div className="breadcrumb">
                <a href="https://www.google.com/">XUẤT BẢN</a>
                <i className="fa-solid fa-angle-right"></i>
                <a href="https://www.google.com/">SÁCH HAY</a>
            </div> */}
            <div className="title">
                <h1>{pageData.title}</h1>
            </div>
            <div className="publish-detail">
                <span className="author">{pageData.author}</span>
                <i className="fa-solid fa-circle fa-2xs"></i>
                <span className="update-date">{pageData.updatedate}</span>
            </div>
            <div className="introduction">
                <p>{pageData.introduction}</p>
            </div>
            <div className="paragraph">
                <p>{pageData.paragraph}</p>
            </div>
            <div className="image-info">
                <img src={pageData.imgsrc} alt={pageData.imgalt} />
                <p>{pageData.imgdesc}</p>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getDetailLeftDispatch: (payload) => asyncGetDetailLeftAction(dispatch)(payload),
    getDetailMiddleDispatch: (payload) => asyncGetDetailMiddleAction(dispatch)(payload),
    getDetailRightDispatch: (payload) => asyncGetDetailRightAction(dispatch)(payload),
    getDetailBookDispatch: (payload) => asyncGetDetailBookAction(dispatch)(payload)
})
const withConnect = connect(null, mapDispatchToProps)

export default compose(withConnect)(ReadingPage);