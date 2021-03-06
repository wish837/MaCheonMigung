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
            q: "?????????????????? ??? ????????? ????????? ????????? ????????????. ???????????? 51?????? ????????? ????????? ????????????? (????????? ?????? ????????? ?????????.)",
            a: "?????? ???"
        },
        {
            n: "02/12",
            q: "????????????????????? ?????? ????????? ??????. ?????? ??? ?????? ????????? ????????? ?????????????",
            a: "?????????"
        },
        {
            n: "03/12",
            q: "???????????? ?????? ???????????? OO???????????? ??????. OO??? ????????? ??????????",
            a: "??????"
        },
        {
            n: "04/12",
            q: "???????????? ?????? OOOO??? ????????????. OOOO??? ????????? ??????????",
            a: "????????????"
        },
        {
            n: "05/12",
            q: "???????????? ?????? ?????????????????? ?????? ????????? ????????? ?????????????",
            a: "???????????? ????????? ???????????? ????????? 3???"
        },
        {
            n: "06/12",
            q: "??????????????? ????????? ???????????? ????????? ????????? 3??? ????????? ??? OO ???????????? ???????????????. OO??? ????????? ??????????",
            a: "??????"
        },
        {
            n: "07/12",
            q: "??????????????? ?????? ?????????????????? ??????(??????) ???????????? ????????? ???????????? ????????????. ?????????????????? ????????? ????????? ????????? ??????????????? ????????? ?????????. ????????????, ??? ??????????????? ????????? ???????????? ??? kg??????? (????????? ??????.)",
            a: "140"
        },
        {
            n: "08/12",
            q: "??????????????? 2??? ????????? ?????? ???????????? ???, ???????????? ???????????? ?????????????????? ??????????????? ?????? ????????????. ????????????, ??????????????? ?????? ???????????? ??? ???????????????? (????????? ??????.)",
            a: "59"
        },
        {
            n: "09/12",
            q: "?????? ??????????????? ??????????????? ????????? ?????? ?????? ??????. ?????? ???????????? ???????????? '??????, OO OO.'?????? ????????? ?????????. ????????? ????????? ????????? ?????????????",
            a: "?????? ??????"
        },
        {
            n: "10/12",
            q: "????????? OO ???????????? ???????????? ????????? ?????? ?????? ?????? ??? ????????? ????????????. OO??? ????????? ??????????",
            a: "??????"
        },
        {
            n: "11/12",
            q: "???????????? ????????? ???, ?????????????????? ????????? ????????? ?????????. ?????? ????????? ???????????? OO ????????? ?????????. OO??? ????????? ??????????",
            a: "??????"
        },
        {
            n: "12/12",
            q: "?????? ?????? ???????????? ??????????????? ?????? ??? ??? ?????? ??????????????? 21?????? ???????????? ?????? ?????????. ????????????, ??????????????? ?????? ?????? ?????? ????????? ??????????",
            a: "??????"
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
            alert("???????????????.");
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
                    <button className="is-correct-btn" type="button" onClick={goNext}>??????</button>
                </div>
            </div>
        </MainSection>
    )
}

export default Main;