// src/App.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __getPost,
  __deletePost,
  __getComments,
  __deleteComments,
  __editComments,
  __addComments,
} from "../redux/modules/detailSlice";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import "./Detail.css";
import Detailcomment from "../components/Detailcomment";
import Header from "../components/header/Header";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const { isLoading, error, post, comments } = useSelector(
    (state) => state.detail
  );

  const onClickPostDeleteButtonHandler = () => {
    console.log("post 삭제 들어옴!!!!");
    console.log(comments);
    const indexList = [];

    for (const i in comments) {
      if (comments[i].postId === Number(id)) {
        indexList.push(comments[i].id);
      }
    }

    console.log(indexList);
    dispatch(__deletePost([Number(id), indexList]));
    window.location.assign("/");
  };
  const onClickAddCommentButtonHandler = () => {
    dispatch(__addComments([addComment, Number(id)]));
  };
  const [editComment, setEditComment] = useState({
    postId: null,
    id: null,
    content: "",
  });

  const [addComment, setAddComment] = useState({
    postId: null,
    id: null,
    content: "",
  });

  // const [isCommentChange, setIsCommentChange] = useState(false);

  useEffect(() => {
    // param 넣기
    dispatch(__getPost(Number(id)));
    dispatch(__getComments(Number(id)));
    // 합치기
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  console.log(post);
  console.log(comments);

  return (
    <>
      <Header />
      <div className="detail">
        <div className="detailMain">
          <div className="detailContent">
            {/* <p>id : {post.id}</p> */}
            <h1>🎄{post.title}</h1>
            <hr></hr>
            <div>
              <img src={post.url} className="detailImage" />
            </div>
            <div>{post.content}</div>
            <div className="detailContentButtons">
              <Button variant="danger" onClick={onClickPostDeleteButtonHandler}>
                삭제
              </Button>
              {/* <button onClick={onClickPostDeleteButtonHandler}>삭제</button> */}
              <Button
                variant="success"
                onClick={() => {
                  navigate(`/postingEdit/${post.id}`);
                }}
              >
                수정
              </Button>
            </div>
          </div>

          <div className="detailComments">
            {comments.map((comment) => (
              <Detailcomment
                comment={comment}
                editComment={editComment}
                setEditComment={setEditComment}
                id={id}
                dispatch={dispatch}
                __deleteComments={__deleteComments}
                __editComments={__editComments}
              />
            ))}
            <div className="detailCommentsInput">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="댓글을 입력하세요."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  id="detailCommentsInputText"
                  onChange={(e) => {
                    setAddComment({
                      ...addComment,
                      // postId: Number(id),
                      // id: comments[comments.length - 1].id + 1,
                      content: e.target.value,
                    });
                    console.log(addComment);
                    console.log(addComment.id);
                  }}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  onClick={onClickAddCommentButtonHandler}
                >
                  등록
                </Button>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
