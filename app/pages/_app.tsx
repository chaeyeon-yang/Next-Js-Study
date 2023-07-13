import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";

export default function App({ Component }: AppProps) {
    const client = new ApolloClient({
        uri: "http://practice.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(), // 나중에 하기
    });
    return (
        <ApolloProvider client={client}>
            <Component />
        </ApolloProvider>
    );
}
// 모든 페이지에서 useMutation 사용 가능
