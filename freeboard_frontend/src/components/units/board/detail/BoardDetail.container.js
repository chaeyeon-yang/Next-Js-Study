import React from "react";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

export default function BoardDetail() {
    const router = useRouter();
    console.log(router);

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.id,
        },
    });
    return <BoardDetailUI data={data} />;
}
