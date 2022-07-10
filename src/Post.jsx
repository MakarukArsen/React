import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import {faComment} from "@fortawesome/free-solid-svg-icons"
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons"
import {faRetweet} from "@fortawesome/free-solid-svg-icons"
const PostComponent = ({data}) => {
    const {name, photo, nickname, content, image, date, comments, reposts, likes} = data
    return(
        <div className="wrapper">
            <h1>HW 14 React</h1>
            <div className="post">  
                <div className="container">
                    <div className="post__box box">
                        <div className="box__image">
                            <img className="user__image" src={photo}></img>
                        </div>
                        <div className="box__content content">
                            <div className="content__header header">
                                <div className="header__username-date">
                                    <div className="name">{name}</div>
                                    <div className="nickname">{nickname}</div>
                                    <div className="date">{date}</div>
                                </div>
                                <div className="header__text">{content}</div>
                            </div>
                            <div className="content__main main">
                                <img className="main__image" src={image}></img>
                            </div>
                            <div className="content__footer footer">
                                <li className="footer__comment">
                                <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                                <p className="mount">{comments}</p>
                                </li>
                                <li className="footer__repost">
                                <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon>
                                <p className="mount">{reposts}</p>
                                </li>
                                <li className="footer__like">
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                <p className="mount">{likes}</p>
                                </li>
                                <li className="footer__upload">
                                <FontAwesomeIcon icon={faArrowUpFromBracket}></FontAwesomeIcon>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PostComponent;