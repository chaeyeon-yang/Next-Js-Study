import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
    mutation createProduct(
        $seller: String
        $createProductInput: CreateProductInput!
    ) {
        # 변수의 type 적는 곳
        createProduct(
            seller: $seller
            createProductInput: $createProductInput # 실제 우리가 전달할 변수 적는 곳
        ) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationArgsPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT);
    const onClickSubmit = async () => {
        // const writer = "qqq" // 이 함수에 있으면 현재 스코프
        const result = await createProduct({
            variables: {
                // variables 이게 $ 역할을 해줌
                seller: "강철채연ㅋ",
                createProductInput: {
                    name: "쏨뱅이",
                    detail: "제가 직접 제주 앞바다에서 잡았습니다",
                    price: 5000,
                },
            },
        });
        console.log(result);
        alert(result.data.createProduct.message);
    };

    return (
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    );
}
