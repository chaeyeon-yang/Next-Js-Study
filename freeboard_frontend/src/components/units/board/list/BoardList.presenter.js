import React from "react";
import * as S from "./BoardList.styles";

export default function BoardListUI() {
    return (
        <S.Container>
            <S.Board>
                <S.Column>
                    <S.ColumnTitle>번호</S.ColumnTitle>
                    <S.ColumnTitle>제목</S.ColumnTitle>
                    <S.ColumnTitle>작성자</S.ColumnTitle>
                    <S.ColumnTitle>날짜</S.ColumnTitle>
                </S.Column>
                <S.Row></S.Row>
            </S.Board>
        </S.Container>
    );
}
