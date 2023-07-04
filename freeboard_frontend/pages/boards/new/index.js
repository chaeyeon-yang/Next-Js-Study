import { useState } from "react";
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
    ImgIcon,
    ImageLabel,
    RadioSection,
    Youtube,
    Image,
    RegisterBtn,
    ImgSection,
    Btn,
    Error,
} from "../../../styles/boards/new/emotions";
export default function PostWritePage() {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [address, setAddress] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentError, setContentError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [youtubeLinkError, setYoutubeLinkError] = useState("");

    const onChangeWriter = (e) => {
        setWriter(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    };

    const onChangeYoutubeLink = (e) => {
        setYoutubeLink(e.target.value);
    };

    const onClickRegister = () => {
        if (!writer) {
            setWriterError("작성자를 입력하세요.");
        }
        if (!password) {
            setPasswordError("비밀번호를 입력하세요.");
        }
        if (!title) {
            setTitleError("제목을 입력하세요.");
        }
        if (!content) {
            setContentError("내용을 입력하세요.");
        }
        if (!address) {
            setAddressError("주소를 입력하세요.");
        }
        if (!youtubeLink) {
            setYoutubeLinkError("유튜브 링크를 입력하세요.");
        }

        if (writer && password && title && content && address && youtubeLink) {
            alert("회원가입을 축하합니다!");
        }
    };

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
                            onChange={onChangeWriter}
                        ></Writer>
                        <Error>{writerError}</Error>
                    </InputWrapper>

                    <InputWrapper>
                        <Label>비밀번호</Label>
                        <Password
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                            onChange={onChangePassword}
                        ></Password>
                        <Error>{passwordError}</Error>
                    </InputWrapper>
                </WriterWrapper>

                <InputWrapper>
                    <Label>제목</Label>
                    <PostTitle
                        type="text"
                        placeholder="제목을 작성해주세요."
                        onChange={onChangeTitle}
                    ></PostTitle>
                </InputWrapper>
                <Error>{titleError}</Error>
                <InputWrapper>
                    <Label>내용</Label>
                    <Contents
                        type="text"
                        placeholder="내용을 작성해주세요."
                        onChange={onChangeContent}
                    ></Contents>
                </InputWrapper>
                <Error>{contentError}</Error>
                <InputWrapper>
                    <Label>주소</Label>
                    <ZipWrapper>
                        <ZipCode type="text" placeholder="07250"></ZipCode>
                        <ZipCodeBtn>우편번호 검색</ZipCodeBtn>
                    </ZipWrapper>
                    <Address onChange={onChangeAddress}></Address>
                    <Error>{addressError}</Error>
                    <Address onChange={onChangeAddress}></Address>
                    <Error>{addressError}</Error>
                </InputWrapper>

                <InputWrapper>
                    <Label>유튜브</Label>
                    <YoutubeLink
                        type="text"
                        placeholder="링크를 복사해주세요."
                        onChange={onChangeYoutubeLink}
                    ></YoutubeLink>
                </InputWrapper>
                <Error>{youtubeLinkError}</Error>
                <ImgSection>
                    <Label>사진 첨부</Label>
                    <ImgWrapper>
                        <Img>
                            <ImgIcon>+</ImgIcon>
                            <ImgLabel>Upload</ImgLabel>
                        </Img>
                        <Img>
                            <ImgIcon>+</ImgIcon>
                            <ImgLabel>Upload</ImgLabel>
                        </Img>
                        <Img>
                            <ImgIcon>+</ImgIcon>
                            <ImgLabel>Upload</ImgLabel>
                        </Img>
                    </ImgWrapper>
                </ImgSection>

                <RadioSection>
                    <Label>메인 설정</Label>
                    <RadioWrapper>
                        <Youtube>
                            <Radio
                                type="radio"
                                id="youtube"
                                name="youtube"
                            ></Radio>
                            <YoutubeLabel for="youtube">유튜브</YoutubeLabel>
                        </Youtube>
                        <Image>
                            <Radio type="radio" id="image" name="image"></Radio>
                            <ImageLabel for="image">사진</ImageLabel>
                        </Image>
                    </RadioWrapper>
                </RadioSection>
                <Btn>
                    <RegisterBtn onClick={onClickRegister}>
                        등록하기
                    </RegisterBtn>
                </Btn>
            </Container>
        </Body>
    );
}
