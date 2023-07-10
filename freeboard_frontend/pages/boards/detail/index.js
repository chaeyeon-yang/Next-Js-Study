import React from "react";

import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

import {
    Container,
    PostHeader,
    Profile,
    PostDetail,
    User,
    Date,
    Underline,
    HeaderIcons,
    PostTitle,
    PostImage,
    Contents,
    Video,
    Recommend,
    ThumbUp,
    StyledThumbUpIcon,
    ThumbUpCount,
    ThumbDown,
    StyledThumbDownIcon,
    ThumbDownCount,
} from "@/styles/boards/detail/emotions";

export default function index() {
    return (
        <Container>
            <PostHeader>
                <Profile></Profile>
                <PostDetail>
                    <User>양채연</User>
                    <Date>Date: 2023.07.07</Date>
                </PostDetail>
                <HeaderIcons>
                    <InsertLinkOutlinedIcon></InsertLinkOutlinedIcon>
                    <FmdGoodOutlinedIcon></FmdGoodOutlinedIcon>
                </HeaderIcons>
            </PostHeader>
            <Underline></Underline>
            <PostTitle>게시글 제목입니다.</PostTitle>
            <PostImage></PostImage>
            <Contents>가나다라마바사아자차카타파하</Contents>
            <Video>
                <iframe
                    width="400"
                    height="250"
                    src="https://www.youtube.com/embed/dqlJN9vo9fA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </Video>
            <Recommend>
                <ThumbUp>
                    <StyledThumbUpIcon></StyledThumbUpIcon>
                    <ThumbUpCount>1920</ThumbUpCount>
                </ThumbUp>
                <ThumbDown>
                    <StyledThumbDownIcon></StyledThumbDownIcon>
                    <ThumbDownCount>0</ThumbDownCount>
                </ThumbDown>
            </Recommend>
        </Container>
    );
}
