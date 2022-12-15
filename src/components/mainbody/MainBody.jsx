import React from "react";
import "./MainBody.css";

const MainBody = () => {
  return (
    <div className="container">
      <div className="inner">
        <div className="item">
          <div className="item front family">
            <div className="item__name">FAMILY</div>
          </div>
          <div className="item back">
            <div className="item__name">
              가족들과 따뜻한 크리마스를 보내세요
            </div>
            <a href="/family" className="btn">
              카테고리 보기
            </a>
          </div>
        </div>
        <div className="item">
          <div className="item front couple">
            <div className="item__name">COUPLE</div>
          </div>
          <div className="item back">
            <div className="item__name">연인과 따뜻한 크리마스를 보내세요</div>
            <a href="/couple" className="btn">
              카테고리 보기
            </a>
          </div>
        </div>
        <div className="item">
          <div className="item front single">
            <div className="item__name">SINGLE</div>
          </div>
          <div className="item back">
            <div className="item__name">
              혼자,친구들과 따뜻한 크리마스를 보내세요
            </div>
            <a href="/single" className="btn">
              카테고리 보기
            </a>
          </div>
        </div>
        <div className="item">
          <div className="item front parents">
            <div className="item__name">PARENTS</div>
          </div>
          <div className="item back">
            <div className="item__name">
              부모님과 따뜻한 크리마스를 보내세요
            </div>
            <a href="/parents" className="btn">
              카테고리 보기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
