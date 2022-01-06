import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainSection = styled.div`
    .main {
        height: 90%;
        width: 90%;
        max-width: 550px;
        background-color: rgb(250, 250, 250, 0.85);
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 15px;
        box-shadow: 0px 0px 3px rgb(0, 0, 0, 0.3);
        font-family: 'Nanum Myeongjo', serif;
    }

    .num {
        font-size: 25px;
        position: absolute;
        top: 7%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .question {
        font-size: 18px;
        width: 80%;
        margin: auto;
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .input-answer {
        text-aline: center;
        line-height: 32px;
        border: none;
        border-radius: 7px;
        width: 60%;
        max-width: 300px;
        background: white;
        font-size: 18px;
        box-shadow: 0px 0px 3px rgb(0, 0, 0, 0.3);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .is-correct {
        height: 32px;
        width: 20%;
        max-width: 300px;
        margin: auto;
        position: absolute;
        top: 85%;
        left: 80%;
        transform: translate(-50%, -50%);
    }

    .is-correct-btn {
        height: 100%;
        width: 100%;
        height: 32px;
        border: none;
        border-radius: 7px;
        background: linear-gradient(125deg, Red, Blue);
        background-position: left;
        background-size: 200%;
        font-weight: bold;
        color: white;
    }

    @media (max-width: 480px) {
        .question {
            font-size: 16px;
            position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .input-answer {
            position: absolute;
            top: 65%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`

function Main() {
    const navigate = useNavigate();
    
    const dataList = [
        {
            n: "01/12",
            q: "마법천자문은 매 권마다 타이틀 한자가 존재한다. 그렇다면 51권의 타이틀 한자는 무엇인가? (한자가 아닌 한글로 쓰시오.)",
            a: "빛날 휘"
        },
        {
            n: "02/12",
            q: "보리도사에게는 많은 제자가 있다. 그중 첫 번째 재자의 이름은 무엇인가?",
            a: "맥주병"
        },
        {
            n: "03/12",
            q: "쌀도사의 제자 불도자는 OO공포증이 있다. OO에 들어갈 단어는?",
            a: "고소"
        },
        {
            n: "04/12",
            q: "쌀도사는 과거 OOOO의 팬이었다. OOOO에 들어갈 단어는?",
            a: "천상천하"
        },
        {
            n: "05/12",
            q: "끼로로가 과거 지하미궁에서 만든 자신의 이름은 무엇인가?",
            a: "오시납왕 대수마 오시납왕 마수마 3세"
        },
        {
            n: "06/12",
            q: "암흑상제가 태초의 어둠에서 빛어낸 암흑계 3대 군단장 중 OO 군단장이 살해당했다. OO에 들어갈 단어는?",
            a: "오만"
        },
        {
            n: "07/12",
            q: "잔혹마왕의 부하 블랙크로우는 심판(審判) 마법으로 나약한 사람들을 선별한다. 블랙크로우가 심판한 사람들 중에는 빙산마을의 사람도 있었다. 그렇다면, 그 빙산마을의 사람의 몸무게는 몇 kg인가? (숫자만 서술.)",
            a: "140"
        },
        {
            n: "08/12",
            q: "혼세마왕이 2차 악마화 이후 쫓아왔을 때, 손오공과 일행들은 마법천자패로 마법장벽을 열어 도망쳤다. 그렇다면, 마법장벽이 열린 페이지는 몇 페이지일까? (숫자만 서술.)",
            a: "59"
        },
        {
            n: "09/12",
            q: "작중 보리도사는 콩도사에게 편지를 보낸 적이 있다. 이때 콩도사는 답장으로 '보리, OO OO.'라는 답장을 보냈다. 빈칸에 들어갈 글자는 무엇인가?",
            a: "네가 와라"
        },
        {
            n: "10/12",
            q: "견우는 OO 보육원의 아이들을 따르게 하기 위해 따를 종 마법을 사용했다. OO에 들어갈 단어는?",
            a: "약속"
        },
        {
            n: "11/12",
            q: "대마왕이 쓰러진 후, 도술섬에서는 집짓기 대회가 열렸다. 그중 삼장과 끼로로는 OO 마을로 향했다. OO에 들어갈 글자는?",
            a: "숲속"
        },
        {
            n: "12/12",
            q: "어느 순간 사라졌던 혼세마왕의 부하 중 한 명인 혼돈장군은 21권이 되어서야 다시 나왔다. 그렇다면, 혼돈장군과 같은 컷에 나온 인물의 이름은?",
            a: "용세"
        }
    ]

    const [data, setData] = useState(0)

    const goNext = () => {
        var inputAnswer = document.querySelector(".input-answer");
        if(inputAnswer.value === dataList[data].a) {
            if(data + 1 < dataList.length) {
                setData(data + 1);
                inputAnswer.value = "";
            }
            else {
                navigate("/end");
            }
        }
        else {
            alert("오답입니다.");
            inputAnswer.value = "";
        }
    }
    
    return (
        <MainSection>
            <div className="main">
                <div className="num">{ dataList[data].n }</div>
                <div className="question">{ dataList[data].q }</div>
                <input className="input-answer" type="text"></input>
                <div className="is-correct">
                    <button className="is-correct-btn" type="button" onClick={goNext}>확인</button>
                </div>
            </div>
        </MainSection>
    )
}

export default Main;