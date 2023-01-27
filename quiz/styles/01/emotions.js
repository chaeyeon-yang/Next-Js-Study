import styled from "@emotion/styled";

export const Body = styled.div`
    display: flex;
    justify-content: center;
    margin: 5rem 0;
`;

export const Container = styled.div`
    width: 640px;
    height: 1138px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`;

export const SearchIcon = styled.img`
    width: 23px;
    height: 23px;
    margin: 42px 0 0 565px;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;
    padding-left: 50px;
    padding-right: 48px;
`;

export const Title = styled.span`
    font-weight: 700px;
    font-size: 40px;
    line-height: 58px;
    text-align: center;
`;
export const Profile = styled.div`
    display: flex;
    align-items: center;
`;
export const UserImg = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: lightgray;
    margin-right: 19px;
`;

export const UserName = styled.span`
    font-size: 24px;
    font-weight: 700px;
    line-height: 35px;
    margin-right: 16.51px;
    text-align: center;
`;

export const RightArrowIcon = styled.img``;

export const NavSub = styled.nav`
    margin-top: 42px;
    margin-bottom: 58px;
    padding-right: 121px;
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
`;

export const Li = styled.li`
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;
    text-align: center;
    color: #cacaca;
`;

export const Line = styled.div`
    width: 640px;
    height: 0px;
    border: 1px solid #cacaca;
`;

export const Main = styled.div`
    margin-top: 25px;
    margin-bottom: 10px;
`;

export const Question = styled.div`
    padding-left: 50px;
    margin-bottom: 44px;
`;
export const QNum = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #adadad;
    margin-bottom: 5px;
`;

export const QRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const QTitle = styled.span`
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
`;

export const DownArrowIcon = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 63.69px;
`;

export const NavMain = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
`;

export const HomeIcon = styled.img`
    width: 40.83px;
    height: 40.35px;
`;
export const PositionIcon = styled.img`
    width: 35px;
    height: 43px;
`;
export const HeartIcon = styled.img`
    width: 40.02px;
    height: 32.99px;
`;
export const PersonIcon = styled.img`
    width: 38px;
    height: 39px;
`;

export const NRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
`;

export const NavTitle = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #adadad;
    text-align: center;
    margin-top: 9px;
    $: (: last-of-type) {
        color: blue;
    }
`;
