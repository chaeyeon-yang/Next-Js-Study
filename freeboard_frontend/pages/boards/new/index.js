import {
    Body,
    Container,
    Title,
    WriterWrapper,
    Label,
    Writer,
    Password,
    InputWrapper,
    PostTitle,
    Contents,
    ZipWrapper,
    ZipCode,
    ZipCodeBtn,
    Address,
    YoutubeLink,
    ImgWrapper,
    Img,
    RadioWrapper,
    Radio,
    YoutubeLabel,
    ImgLabel,
    RegisterBtn,
} from "../../../styles/boards/new/emotions";
export default function PostWritePage() {
    return (
        <Body>
            <Container>
                <Title>게시물 등록</Title>
                <WriterWrapper>
                    <InputWrapper>
                        <Label>작성자</Label>
                        <Writer
                            type="text"
                            placeholder="이름을 적어주세요."
                        ></Writer>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>비밀번호</Label>
                        <Password
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                        ></Password>
                    </InputWrapper>
                </WriterWrapper>
                <InputWrapper>
                    <Label>제목</Label>
                    <PostTitle
                        type="text"
                        placeholder="제목을 작성해주세요."
                    ></PostTitle>
                </InputWrapper>
                <InputWrapper>
                    <Label>내용</Label>
                    <Contents
                        type="text"
                        placeholder="내용을 작성해주세요."
                    ></Contents>
                </InputWrapper>

                <InputWrapper>
                    <Label>주소</Label>
                    <ZipWrapper>
                        <ZipCode type="text" placeholder="07250"></ZipCode>
                        <ZipCodeBtn>우편번호 검색</ZipCodeBtn>
                    </ZipWrapper>
                    <Address></Address>
                    <Address></Address>
                </InputWrapper>
                <InputWrapper>
                    <Label>유튜브</Label>
                    <YoutubeLink
                        type="text"
                        placeholder="링크를 복사해주세요."
                    ></YoutubeLink>
                </InputWrapper>
                <ImgWrapper>
                    <Img></Img>
                    <Img></Img>
                    <Img></Img>
                </ImgWrapper>
                <RadioWrapper>
                    <Radio type="radio" id="youtube" name="youtube"></Radio>
                    <YoutubeLabel for="youtube">유튜브</YoutubeLabel>
                    <Radio type="radio" id="image" name="image"></Radio>
                    <ImgLabel for="image">사진</ImgLabel>
                </RadioWrapper>

                <RegisterBtn>등록하기</RegisterBtn>
            </Container>
        </Body>
    );
}
