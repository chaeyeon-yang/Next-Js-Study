import styled from "@emotion/styled";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

export const Container = styled.div`
    height: 100%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 70px;
    margin: 2.5rem 15rem;
`;

export const PostHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Profile = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: lightgray;
    margin-right: 15px;
`;

export const PostDetail = styled.div`
    margin-right: 550px;
`;

export const User = styled.div`
    font-size: 15px;
    weight: 600;
`;

export const Date = styled.div`
    font-size: 10px;
    color: gray;
`;

export const HeaderIcons = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Underline = styled.div`
    background-color: gray;
    width: 100%;
    height: 0.5px;
    margin-top: 5px;
`;

export const PostTitle = styled.h1`
    font-size: 20px;
    margin-top: 60px;
`;

export const PostImage = styled.div`
    width: 100%;
    height: 300px;
    background-color: lightgray;
`;

export const Contents = styled.div`
    width: 100%;
    margin-top: 40px;
    font-size: 12px;
`;

export const Video = styled.div`
    text-align: center;
    margin-top: 50px;
`;

export const Recommend = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 50px;
`;

export const ThumbUp = styled.div`
    margin-right: 20px;
    color: #ffd600;
`;

export const StyledThumbUpIcon = styled(ThumbUpOffAltIcon)`
    font-size: 15px;
`;

export const ThumbUpCount = styled.div`
    font-size: 12px;
`;

export const ThumbDown = styled.div`
    margin-bottom: 60px;
`;

export const StyledThumbDownIcon = styled(ThumbDownOffAltIcon)`
    font-size: 15px;
`;

export const ThumbDownCount = styled.div`
    font-size: 12px;
`;
