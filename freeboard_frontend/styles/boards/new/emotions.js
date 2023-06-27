import styled from "@emotion/styled";

export const Body = styled.div`
    display: flex;
    justify-content: center;
    margin: 5rem 0;
`;

export const Container = styled.div`
    width: 1200px;
    height: 1847px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding-left: 101px;
    padding-right: 103px;
`;

export const Title = styled.div`
    font-family: "Noto Sans CJK KR";
    font-weight: 700;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    margin-top: 60px;
`;

export const WriterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
`;

export const Label = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
`;

export const Writer = styled.input`
    height: 52px;
    border: 1px solid #bdbdbd;
    padding-left: 15px;
    margin-right: 25px;

    &::placeholder {
        color: #bdbdbd;
        font-size: 16px;
    }
`;

export const Password = styled.input`
    height: 52px;
    border: 1px solid #bdbdbd;
    padding-left: 15px;

    &::placeholder {
        color: #bdbdbd;
        font-size: 16px;
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
`;

export const PostTitle = styled.input`
    height: 52px;
    border: 1px solid #bdbdbd;
    padding-left: 15px;

    &::placeholder {
        color: #bdbdbd;
        font-size: 16px;
    }
`;

export const Contents = styled.textarea`
    height: 480px;
    border: 1px solid #bdbdbd;
    padding-left: 15px;
    padding-top: 20px;
    text-align: left;

    &::placeholder {
        color: #bdbdbd;
        font-size: 16px;
    }
`;

export const ZipWrapper = styled.div``;
export const ZipCode = styled.input`
    border: 1px solid #bdbdbd;
    width: 77px;
    height: 52px;
    &::placeholder {
        text-align: center;
        color: #bdbdbd;
        font-size: 16px;
    }
`;

export const ZipCodeBtn = styled.button`
    background-color: black;
    color: white;
    font-weight: 500;
    font-size: 16px;
    border: 1px solid black;
    width: 124px;
    height: 52px;
    margin-left: 10px;
`;

export const Address = styled.input`
    height: 52px;
    margin-top: 20px;
    border: 1px solid #bdbdbd;
`;

export const YoutubeLink = styled.input`
    height: 45.78px;
    border: 1px solid #bdbdbd;
    padding-left: 15px;
    &::placeholder {
        color: #bdbdbd;
        font-size: 16px;
    }
`;

export const ImgSection = styled.div`
    margin-top: 40px;
`;

export const ImgWrapper = styled.div`
    display: flex;
`;

export const Img = styled.div`
    background: #bdbdbd;
    width: 78px;
    height: 78px;
    margin-right: 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImgIcon = styled.div`
    color: #4f4f4f;
    font-size: 35px;
    padding-top: 10px;
`;

export const ImgLabel = styled.label`
    color: #4f4f4f;
    font-size: 12px;
    font-weight: 500;
`;

export const RadioWrapper = styled.div`
    display: flex;
`;

export const Radio = styled.input``;

export const RadioSection = styled.div`
    margin-top: 50px;
`;

export const Youtube = styled.div`
    margin-right: 15px;
`;
export const Image = styled.div``;
export const YoutubeLabel = styled.label`
    font-size: 16px;
    font-weight: 500;
`;
export const ImageLabel = styled.label`
    font-size: 16px;
    font-weight: 500;
`;

export const Btn = styled.div`
    display: flex;
    justify-contents: center;
    align-items: center;
`;

export const RegisterBtn = styled.button`
    background-color: #ffd600;
    padding: 14px 60px 14px 60px;
    border: none;
    font-size: 16px;
    margin-top: 35px;
    margin-left: 500px;
`;
