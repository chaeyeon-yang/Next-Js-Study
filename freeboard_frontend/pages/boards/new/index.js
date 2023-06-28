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
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");

    const [errorMsg, setErrorMsg] = useState("");

    const onClickRegister = () => {
        if (
            !writer ||
            !password ||
            !title ||
            !content ||
            !zipcode ||
            !address ||
            !youtubeLink
        ) {
            setErrorMsg("빈칸을 입력하지마세요.");
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
                        ></Writer>
                        <Error>{errorMsg}</Error>
                    </InputWrapper>

                    <InputWrapper>
                        <Label>비밀번호</Label>
                        <Password
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                        ></Password>
                        <Error>{errorMsg}</Error>
                    </InputWrapper>
                </WriterWrapper>

                <InputWrapper>
                    <Label>제목</Label>
                    <PostTitle
                        type="text"
                        placeholder="제목을 작성해주세요."
                    ></PostTitle>
                </InputWrapper>
                <Error>{errorMsg}</Error>
                <InputWrapper>
                    <Label>내용</Label>
                    <Contents
                        type="text"
                        placeholder="내용을 작성해주세요."
                    ></Contents>
                </InputWrapper>
                <Error>{errorMsg}</Error>
                <InputWrapper>
                    <Label>주소</Label>
                    <ZipWrapper>
                        <ZipCode type="text" placeholder="07250"></ZipCode>
                        <ZipCodeBtn>우편번호 검색</ZipCodeBtn>
                    </ZipWrapper>
                    <Address></Address>
                    <Error>{errorMsg}</Error>
                    <Address></Address>
                    <Error>{errorMsg}</Error>
                </InputWrapper>

                <InputWrapper>
                    <Label>유튜브</Label>
                    <YoutubeLink
                        type="text"
                        placeholder="링크를 복사해주세요."
                    ></YoutubeLink>
                </InputWrapper>
                <Error>{errorMsg}</Error>
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
