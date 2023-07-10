import React from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
    // 자바스크립트 영역
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [createBoard] = useMutation(CREATE_BOARD);
    const onClickSubmit = async () => {
        // const writer = "qqq" // 스코프 체인
        const result = await createBoard({
            variables: {
                // variables 이게 $ 역할을 해줌
                writer: writer,
                title: title,
                contents: contents,
            },
        });
        console.log(result);
        alert(result.data.createBoard.message);
    };

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    };

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const onChangeContents = (event) => {
        setContents(event.target.value);
    };

    // HTML 영역(return 아래)
    return (
        <BoardWriteUI
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
        />
    );
}
