import { useState } from "react";

export default function CounterStatePage() {
    const [count, setCount] = useState(0);
    function onClickCountUp() {
        setCount(count + 1);
    }

    // state의 상태가 변하면 화면이 리렌더링 됨
    // hook 빼고 모든 코드도 다시 실행 됨
    return (
        // fragment
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기!!!</button>
        </>
    );
}
