import React from "react";
import * as S from "./BoardNew.styles";

export default function BoardNewUI(props) {
    return (
        <S.Body>
            <S.Container>
                <S.Title>게시물 등록</S.Title>
                <S.WriterWrapper>
                    <S.InputWrapper>
                        <S.Label>작성자</S.Label>
                        <S.Writer
                            type="text"
                            placeholder="이름을 적어주세요."
                            onChange={props.onChangeWriter}
                        ></S.Writer>
                        <S.Error>{props.writerError}</S.Error>
                    </S.InputWrapper>

                    <S.InputWrapper>
                        <S.Label>비밀번호</S.Label>
                        <S.Password
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                            onChange={props.onChangePassword}
                        ></S.Password>
                        <S.Error>{props.passwordError}</S.Error>
                    </S.InputWrapper>
                </S.WriterWrapper>

                <S.InputWrapper>
                    <S.Label>제목</S.Label>
                    <S.PostTitle
                        type="text"
                        placeholder="제목을 작성해주세요."
                        onChange={props.onChangeTitle}
                    ></S.PostTitle>
                </S.InputWrapper>
                <S.Error>{props.titleError}</S.Error>
                <S.InputWrapper>
                    <S.Label>내용</S.Label>
                    <S.Contents
                        type="text"
                        placeholder="내용을 작성해주세요."
                        onChange={props.onChangeContent}
                    ></S.Contents>
                </S.InputWrapper>
                <S.Error>{props.contentsError}</S.Error>
                <S.InputWrapper>
                    <S.Label>주소</S.Label>
                    <S.ZipWrapper>
                        <S.ZipCode type="text" placeholder="07250"></S.ZipCode>
                        <S.ZipCodeBtn>우편번호 검색</S.ZipCodeBtn>
                    </S.ZipWrapper>
                    <S.Address onChange={props.onChangeAddress}></S.Address>
                    <S.Error>{props.addressError}</S.Error>
                    <S.Address onChange={props.onChangeAddress}></S.Address>
                    <S.Error>{props.addressError}</S.Error>
                </S.InputWrapper>

                <S.InputWrapper>
                    <S.Label>유튜브</S.Label>
                    <S.YoutubeLink
                        type="text"
                        placeholder="링크를 복사해주세요."
                        onChange={props.onChangeYoutubeLink}
                    ></S.YoutubeLink>
                </S.InputWrapper>
                <S.Error>{props.youtubeLinkError}</S.Error>
                <S.ImgSection>
                    <S.Label>사진 첨부</S.Label>
                    <S.ImgWrapper>
                        <S.Img>
                            <S.ImgIcon>+</S.ImgIcon>
                            <S.ImgLabel>Upload</S.ImgLabel>
                        </S.Img>
                        <S.Img>
                            <S.ImgIcon>+</S.ImgIcon>
                            <S.ImgLabel>Upload</S.ImgLabel>
                        </S.Img>
                        <S.Img>
                            <S.ImgIcon>+</S.ImgIcon>
                            <S.ImgLabel>Upload</S.ImgLabel>
                        </S.Img>
                    </S.ImgWrapper>
                </S.ImgSection>

                <S.RadioSection>
                    <S.Label>메인 설정</S.Label>
                    <S.RadioWrapper>
                        <S.Youtube>
                            <S.Radio
                                type="radio"
                                id="youtube"
                                name="youtube"
                            ></S.Radio>
                            <S.YoutubeLabel for="youtube">
                                유튜브
                            </S.YoutubeLabel>
                        </S.Youtube>
                        <S.Image>
                            <S.Radio
                                type="radio"
                                id="image"
                                name="image"
                            ></S.Radio>
                            <S.ImageLabel for="image">사진</S.ImageLabel>
                        </S.Image>
                    </S.RadioWrapper>
                </S.RadioSection>
                <S.Btn>
                    <S.RegisterBtn
                        onClick={props.onClickRegister}
                        isActivation={props.activation}
                    >
                        등록하기
                    </S.RegisterBtn>
                </S.Btn>
            </S.Container>
        </S.Body>
    );
}
