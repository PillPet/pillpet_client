import React from "react";

interface IndexPageProps {
}

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <div>
      <div>
        Pill Pet
      </div>
      
      <div>
        cards
      </div>
      
      <div>
        apply page
      </div>
      
      <div>
        진료 예약 | 예약 히스토리
      </div>
      
      <div>
        최근 문진
        
        <div>
          <div>
            소화불량
            <div>자세히 보기</div>
          </div>
          <div>
            소화불량
            <div>자세히 보기</div>
          </div>
          <div>
            소화불량
            <div>자세히 보기</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
