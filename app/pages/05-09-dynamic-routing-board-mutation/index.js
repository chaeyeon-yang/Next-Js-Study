import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        # 변수의 type 적는 곳
        createBoard(writer: $writer, title: $title, contents: $contents) {
            # 실제 우리가 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationArgsPage() {
    const router = useRouter();

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [createBoard] = useMutation(CREATE_BOARD);
    const onClickSubmit = async () => {
        try {
            // const writer = "qqq" // 스코프 체인
            const result = await createBoard({
                variables: {
                    // variables 이게 $ 역할을 해줌
                    writer,
                    title,
                    contents,
                },
            });
            console.log(result);
            alert(result.data.createBoard.message);
            // router.push(
            //     "/05-10-dynamic-routed-board-mutation/" +
            //         result.data.createBoard.number
            // );
            router.push(
                `/05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}` // 템플릿 리터럴
            );
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
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

    return (
        <>
            작성자: <input type="text" onChange={onChangeWriter} />
            <br />
            제목: <input type="text" onChange={onChangeTitle} />
            <br />
            내용: <input type="text" onChange={onChangeContents} />
            <br />
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    );
}
