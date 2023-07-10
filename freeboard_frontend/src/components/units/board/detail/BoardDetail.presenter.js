import React from "react";
import * as S from "./BoardDetail.styles";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export default function BoardDetailUI(props) {
    return (
        <S.Container>
            <S.PostHeader>
                <S.Profile></S.Profile>
                <S.PostDetail>
                    <S.User>
                        {props.data && props.data.fetchBoard.writer}
                    </S.User>
                    <S.Date>Date: 2023.07.07</S.Date>
                </S.PostDetail>
                <S.HeaderIcons>
                    <InsertLinkOutlinedIcon></InsertLinkOutlinedIcon>
                    <FmdGoodOutlinedIcon></FmdGoodOutlinedIcon>
                </S.HeaderIcons>
            </S.PostHeader>
            <S.Underline></S.Underline>
            <S.PostTitle>
                {props.data && props.data.fetchBoard.title}
            </S.PostTitle>
            <S.PostImage></S.PostImage>
            <S.Contents>
                {props.data && props.data.fetchBoard.contents}
            </S.Contents>
            <S.Video
                width="400"
                height="250"
                src="https://www.youtube.com/embed/dqlJN9vo9fA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            />
            <S.Recommend>
                <S.ThumbUp>
                    <S.StyledThumbUpIcon></S.StyledThumbUpIcon>
                    <S.ThumbUpCount>1920</S.ThumbUpCount>
                </S.ThumbUp>
                <S.ThumbDown>
                    <S.StyledThumbDownIcon></S.StyledThumbDownIcon>
                    <S.ThumbDownCount>0</S.ThumbDownCount>
                </S.ThumbDown>
            </S.Recommend>
        </S.Container>
    );
}
