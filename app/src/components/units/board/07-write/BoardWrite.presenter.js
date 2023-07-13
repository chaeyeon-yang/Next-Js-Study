import React from "react";
// export 와 export default를 함께 사용하는 방법
// import qqq, { BlueButton, RedInput } from "./BoardWrite.styles";

import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
    // 자바스크립트 영역

    // HTML 영역(return 아래)
    return (
        <>
            작성자: <S.RedInput type="text" onChange={props.onChangeWriter} />
            <br />
            제목: <S.RedInput type="text" onChange={props.onChangeTitle} />
            <br />
            내용: <S.RedInput type="text" onChange={props.onChangeContents} />
            <br />
            <S.BlueButton
                onClick={props.onClickSubmit}
                rrr="20px"
                qqq="yellow"
                zzz={props.mycolor}
            >
                GRAPHQL-API(동기) 요청하기
            </S.BlueButton>
        </>
    );
}
