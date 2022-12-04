import './IndexPage.css';
import { useEffect } from 'react';
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux";
import { compose } from 'recompose';

import { filterLeft, selectLefts } from './leftstore/selector';
import { getAllLeftAction, filterLeftAction } from './leftstore/action';

import { filterMiddle, selectMiddles } from './middlestore/selector';
import { getAllMiddleAction, filterMiddleAction } from './middlestore/action';

import { filterRight, selectRights } from './rightstore/selector';
import { getAllRightAction, filterRightAction } from './rightstore/action';
import { Link } from 'react-router-dom';

function IndexPage(props) {
    const { getAllLeftDispatch, getAllMiddleDispatch, getAllRightDispatch, getDisplayLeftDispatch, getDisplayRightDispatch, getDisplayMiddleDispatch } = props
    const { listLeft, listMiddle, listRight, displayLeft, displayRight, displayMiddle } = props
    useEffect(() => {
        //getAllLeftDispatch();

        //getAllMiddleDispatch();
        //getAllRightDispatch();
        getDisplayLeftDispatch();
        getDisplayRightDispatch();
        getDisplayMiddleDispatch();
    }, [])

    return (
        <>
            <div className="widget">
                <img src={require("./img/stat.jpg")} className="widget-img" alt='status-icon' />
                <div className="widget-content">
                    <ul>
                        <li><span>#</span> Dịch sốt xuất huyết bùng phát</li>
                        <li><span>#</span> Cựu thủ tướng Abe ám sát</li>
                        <li><span>#</span> Khủng hoảng Sri Lanka</li>
                    </ul>
                </div>
                <div className="weather">
                    <span className="weather-location"><b>TP.Hồ Chí Minh</b> 27&#8451;/25-30&#8451;</span>
                    <img src={require("./img/rain.png")} className="weather-image" alt='weather' />
                </div>
            </div>
            <div className="content">
                <div className="content-left">
                    {
                        displayLeft.map(item =>
                            <Link className="left-item" to={`content/left/${item.id}`} key={`left-${item.id}`}>
                                <img src={item.imgsrc} className="left-item-img" alt={item.imgalt} />
                                <h4>{item.title}</h4>
                            </Link>
                        )
                    }
                </div>
                <div className="middle-right">
                    <div className="content-middle">
                        {
                            displayMiddle.map(item =>
                                <Link className='middle-item' to={`content/middle/${item.id}`} key={`middle-${item.id}`}>
                                    <img src={item.imgsrc} className="middle-item-img" alt={item.imgalt} />
                                    <h1>{item.title}</h1>
                                    <p>{item.introduction}</p>
                                </Link>
                            )
                        }
                    </div>
                    <div className="content-right">
                        {
                            displayRight.map(item =>
                                <Link className="right-item" to={`content/right/${item.id}`} key={`right-${item.id}`}>
                                    <img src={item.imgsrc} className="right-item-img" alt={item.imgalt} />
                                    <h3>{item.title}</h3>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    listLeft: selectLefts,
    listMiddle: selectMiddles,
    listRight: selectRights,
    displayLeft: filterLeft,
    displayRight: filterRight,
    displayMiddle: filterMiddle
})

const mapDispatchToProps = (dispatch) => ({
    getAllLeftDispatch: (payload) => dispatch(getAllLeftAction(payload)),
    getAllMiddleDispatch: (payload) => dispatch(getAllMiddleAction(payload)),
    getAllRightDispatch: (payload) => dispatch(getAllRightAction(payload)),
    getDisplayLeftDispatch: (payload) => dispatch(filterLeftAction(payload)),
    getDisplayRightDispatch: (payload) => dispatch(filterRightAction(payload)),
    getDisplayMiddleDispatch: (payload) => dispatch(filterMiddleAction(payload)),
})
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(IndexPage);