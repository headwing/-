import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __getPost, __patchPost } from "../../redux/modules/postSlice";
import Button from "../button/Button";
import "./form.css";

function EditForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const { id } = useParams();

  useEffect(() => {
    dispatch(__getPost(id));
  }, []);

  const selected = useSelector((state) => state.post.post);

  useEffect(() => {
    if (selected) {
      setTitle(selected.title);
      setCategory(selected.category);
      setContent(selected.content);
      setUrl(selected.url);
    }
  }, [selected]);

  const onClickEditHandler = () => {
    const newPost = {
      id: selected.id,
      title: title,
      category: category,
      content: content,
      url: url,
    };
    const payload = [newPost.id, newPost];
    dispatch(__patchPost(payload));
    navigate(`/${newPost.category}`);
    console.log(newPost.id, newPost);
  };

  return (
    <div className="posting-form-contianer">
      <div className="posting-input-group">
        <div className="posting-title">
          <label>제목</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="posting-category">
          <label>WITH?</label>
          <select
            value={category}
            name="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {" "}
            <option value="" selected>
              카테고리를 선택해주세요
            </option>
            <option value="family">아이와함께👶</option>
            <option value="couple">연인과함께💕</option>
            <option value="single">혼자지만 괜찮아😭</option>
            <option value="parents">부모님과 함께👵👴</option>
          </select>
        </div>
        <div className="posting-content">
          <textarea
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="posting-url">
          <input
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
      </div>
      <div className="posting-btn">
        <Button onClick={onClickEditHandler}>수정</Button>
      </div>
    </div>
  );
}

export default EditForm;
