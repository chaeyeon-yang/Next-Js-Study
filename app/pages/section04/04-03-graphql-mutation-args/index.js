import { gql, useMutation } from "@apollo/client";

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
    const [createBoard] = useMutation(CREATE_BOARD);
    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: {
                // variables 이게 $ 역할을 해줌
                writer: "채연",
                title: "안녕하세유",
                contents: "반가와유",
            },
        });
        console.log(result);
        alert(result.data.createBoard.message);
    };
    return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
