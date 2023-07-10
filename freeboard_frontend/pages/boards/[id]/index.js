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
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            writer
            title
            contents
        }
    }
`;

export default function index() {
    const router = useRouter();
    console.log(router);

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.id,
        },
    });

    return (
        <Container>
            <PostHeader>
                <Profile></Profile>
                <PostDetail>
                    <User>{data && data.fetchBoard.writer}</User>
                    <Date>Date: 2023.07.07</Date>
                </PostDetail>
                <HeaderIcons>
                    <InsertLinkOutlinedIcon></InsertLinkOutlinedIcon>
                    <FmdGoodOutlinedIcon></FmdGoodOutlinedIcon>
                </HeaderIcons>
            </PostHeader>
            <Underline></Underline>
            <PostTitle>{data && data.fetchBoard.title}</PostTitle>
            <PostImage></PostImage>
            <Contents>{data && data.fetchBoard.contents}</Contents>
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
