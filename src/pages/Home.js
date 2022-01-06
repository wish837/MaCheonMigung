import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeSection = styled.div`
    .home {
        height: 480px;
        width: 85%;
        max-width: 550px;
        background-color: rgb(250, 250, 250, 0.85);
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 15px;
        box-shadow: 0px 0px 3px rgb(0, 0, 0, 0.3);
        font-family: 'Song Myung', serif;
    }

    .title {
        font-size: 33px;
        font-weight: bold;
        margin: 45px;
    }

    .info {
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 18px;
        transform: translate(-50%, -50%);
    }

    .start-btn {
        height: 40px;
        width: 60%;
        max-width: 280px;
        border: none;
        border-radius: 7px;
        background: linear-gradient(125deg, Red, Blue);
        background-position: left;
        background-size: 200%;
        margin-top: 175px;
        font-weight: bold;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 480px) {
        .title {
            font-size: 30px;
            margin: 35px;
        }

        .info {
            font-size: 16px;
        }

        .start-btn {
            margin-top: 180px;
        }
    }
`

function Home() {
    return (
        <HomeSection>
            <div className="home">
                <div className="title">迷宮 脫出</div>
                <div className="info">
                    <p>본 미궁은 아동용 한자 학습만화 <b>마법천자문</b>의 1권~51권의 내용을 기반으로 만들어졌습니다.</p>
                    <p>문제는 총 12문항으로 이루어져 있으며, 스포일러가 될 수 있으니 이 점 유의해주세요.</p>
                    <p>만약 문제의 직접적인 답 공유가 적발되는 경우 홈페이지는 예고 없이 폐쇄됩니다.</p>
                    <p>그럼 모두 미궁을 즐겨주시길 바랍니다.</p>
                    <p>입장하시겠습니까?</p>
                </div>
                <Link to="/main">
                    <button className="start-btn" type="button">시작</button>
                </Link>
            </div>
        </HomeSection>
    )
}

export default Home;