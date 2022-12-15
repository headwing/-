import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Detailcomment = (props) => {
  const {
    comment,
    editComment,
    setEditComment,
    id,
    dispatch,
    __deleteComments,
    __editComments,
  } = props;

  const [isCommentChange, setIsCommentChange] = useState(false);

  const onClickCommentEditButtonHandler = (commentId, editComment) => {
    if (isCommentChange === false) {
      setIsCommentChange(true);
    } else {
      dispatch(__editComments([commentId, editComment]));
      setIsCommentChange(false);
    }
  };

  return (
    <div>
      <Card key={comment.id} id="detailCommentsOneCard">
        <Card.Body className="detailCommentsOne">
          {isCommentChange === false ? (
            comment.content
          ) : (
            <input
              type="text"
              onChange={(e) => {
                setEditComment({
                  ...editComment,
                  postId: Number(id),
                  id: comment.id,
                  content: e.target.value,
                });
                console.log(editComment);
              }}
            ></input>
          )}

          <div>
            <Button
              className="detailCommentsOneBtn"
              variant="danger"
              onClick={() => {
                console.log(comment.id);
                dispatch(__deleteComments(comment.id));
              }}
            >
              삭제
            </Button>
            <Button
              className="detailCommentsOneBtn"
              variant="success"
              onClick={() => {
                onClickCommentEditButtonHandler(comment.id, editComment);
              }}
            >
              수정
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detailcomment;
