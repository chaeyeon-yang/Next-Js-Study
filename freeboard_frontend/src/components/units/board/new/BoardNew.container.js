import React from "react";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD } from "./BoardNew.queries";
import BoardNewUI from "./BoardNew.presenter";

export default function BoardNew() {
    const router = useRouter();

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState(0);
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [address, setAddress] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");

    const [activation, setActivation] = useState(false);

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [youtubeLinkError, setYoutubeLinkError] = useState("");

    useEffect(() => {
        if (writer && password && title && contents && address && youtubeLink) {
            setActivation(true);
        } else {
            setActivation(false);
        }
    }, [writer, password, title, contents, address, youtubeLink]);

    const onChangeWriter = (e) => {
        setWriter(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const onChangeContent = (e) => {
        setContents(e.target.value);
    };

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    };

    const onChangeYoutubeLink = (e) => {
        setYoutubeLink(e.target.value);
    };

    const [createBoard] = useMutation(CREATE_BOARD);
    const onClickRegister = async () => {
        if (!writer) {
            setWriterError("작성자를 입력하세요.");
        }
        if (!password) {
            setPasswordError("비밀번호를 입력하세요.");
        }
        if (!title) {
            setTitleError("제목을 입력하세요.");
        }
        if (!contents) {
            setContentsError("내용을 입력하세요.");
        }
        if (!address) {
            setAddressError("주소를 입력하세요.");
        }
        if (!youtubeLink) {
            setYoutubeLinkError("유튜브 링크를 입력하세요.");
        }

        if (writer && password && title && contents && address && youtubeLink) {
            try {
                const res = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer,
                            title,
                            password,
                            contents,
                        },
                    },
                });

                // console.log("제대로 됐는지 확인", res.data.createBoard._id);
                setAddressError("");
                setContentsError("");
                setPasswordError("");
                setTitleError("");
                setWriterError("");
                setYoutubeLinkError("");
                alert("회원가입을 축하합니다!");
                router.push(`/boards/${res.data.createBoard._id}`);
            } catch (e) {
                alert(e.message);
            }
        }
    };
    return (
        <BoardNewUI
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContent={onChangeContent}
            onChangeAddress={onChangeAddress}
            onChangeYoutubeLink={onChangeYoutubeLink}
            onClickRegister={onClickRegister}
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            addressError={addressError}
            youtubeLinkError={youtubeLinkError}
            activation={activation}
        />
    );
}
