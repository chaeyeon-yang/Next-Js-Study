import {
    Body,
    Container,
    SearchIcon,
    Header,
    Title,
    Profile,
    UserImg,
} from "../../styles/01/emotions";
export default function MyPage() {
    return (
        <Body>
            <Container>
                <SearchIcon src="/Group.svg" />
                <Header>
                    <Title>마이</Title>
                    <Profile>
                        <UserImg></UserImg>
                    </Profile>
                </Header>
                <nav></nav>
                <main></main>
                <nav></nav>
            </Container>
        </Body>
    );
}
