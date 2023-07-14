import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number: $number) {
            writer
            title
            contents
        }
    }
`;

// useMutation은 나의 함수로 만들어서 실행시키고 싶은 곳에서 실행시킬 수 있음
// useQuery는 페이지에 들어오자마자 자동으로 실행되어 백엔드에 api 요청이 들어간다.

export default function DynamicRoutedPage() {
    const router = useRouter();
    console.log(router);

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.qqq),
        },
    });
    console.log("=====");
    console.log(data);
    console.log(router.query.qqq);
    console.log("=====");

    return (
        <>
            <div>{router.query.qqq}번 게시물로 이동이 완료되었습니다.</div>
            <div>
                작성자: {data ? data.fetchBoard.writer : "로딩중입니다..."}
            </div>
            <div>제목: {data && data.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
            {/* 옵셔널 체이닝 */}
        </>
    );
}
