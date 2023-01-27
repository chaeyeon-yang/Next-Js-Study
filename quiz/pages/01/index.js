import {
    Body,
    Container,
    SearchIcon,
    Header,
    Title,
    Profile,
    UserImg,
    UserName,
    RightArrowIcon,
    NavSub,
    Ul,
    Li,
    Line,
    Main,
    Question,
    QNum,
    QRow,
    QTitle,
    DownArrowIcon,
    NavMain,
    NavIcons,
    NavTitles,
    HomeIcon,
    PositionIcon,
    HeartIcon,
    PersonIcon,
    UlMain,
    LiMain,
    NRow,
    NavTitle,
} from "../../styles/01/emotions";
export default function MyPage() {
    return (
        <Body>
            <Container>
                <SearchIcon src="/01/search.svg" />
                <Header>
                    <Title>마이</Title>
                    <Profile>
                        <UserImg></UserImg>
                        <UserName>양채연</UserName>
                        <RightArrowIcon src="/01/rightArrow.svg"></RightArrowIcon>
                    </Profile>
                </Header>
                <NavSub>
                    <Ul>
                        <Li>공지사항</Li>
                        <Li>이벤트</Li>
                        <Li>FAQ</Li>
                        <Li>Q&A</Li>
                    </Ul>
                </NavSub>
                <Line></Line>
                <Main>
                    <Question>
                        <QNum>Q. 01</QNum>
                        <QRow>
                            <QTitle>리뷰 작성은 어떻게 하나요?</QTitle>
                            <DownArrowIcon src="/01/downArrow.svg"></DownArrowIcon>
                        </QRow>
                    </Question>
                    <Question>
                        <QNum>Q. 02</QNum>
                        <QRow>
                            <QTitle>리뷰 수정/삭제는 어떻게 하나요?</QTitle>
                            <DownArrowIcon src="/01/downArrow.svg"></DownArrowIcon>
                        </QRow>
                    </Question>
                    <Question>
                        <QNum>Q. 03</QNum>
                        <QRow>
                            <QTitle>아이디/비밀번호를 잊어버렸어요</QTitle>
                            <DownArrowIcon src="/01/downArrow.svg"></DownArrowIcon>
                        </QRow>
                    </Question>
                    <Question>
                        <QNum>Q. 04</QNum>
                        <QRow>
                            <QTitle>회원 탈퇴를 하고싶어요.</QTitle>
                            <DownArrowIcon src="/01/downArrow.svg"></DownArrowIcon>
                        </QRow>
                    </Question>
                    <Question>
                        <QNum>Q. 05</QNum>
                        <QRow>
                            <QTitle>출발지 설정은 어떻게 하나요?</QTitle>
                            <DownArrowIcon src="/01/downArrow.svg"></DownArrowIcon>
                        </QRow>
                    </Question>
                    <Question>
                        <QNum>Q. 06</QNum>
                        <QRow>
                            <QTitle>비밀번호를 변경하고 싶어요</QTitle>
                            <DownArrowIcon src="/01/downArrow.svg"></DownArrowIcon>
                        </QRow>
                    </Question>
                </Main>
                <Line></Line>
                <NavMain>
                    <NRow>
                        <HomeIcon src="/01/home.svg"></HomeIcon>
                        <NavTitle>홈</NavTitle>
                    </NRow>
                    <NRow>
                        <PositionIcon src="/01/position.svg"></PositionIcon>
                        <NavTitle>잇츠로드</NavTitle>
                    </NRow>
                    <NRow>
                        <HeartIcon src="/01/heart.svg"></HeartIcon>
                        <NavTitle>마이찜</NavTitle>
                    </NRow>
                    <NRow>
                        <PersonIcon src="/01/person.svg"></PersonIcon>
                        <NavTitle>마이</NavTitle>
                    </NRow>
                </NavMain>
            </Container>
        </Body>
    );
}
