import React from "react";
import styled from "styled-components";
// import { TwitterShareButton, TwitterIcon } from "react-share";

const EndSection = styled.div`
    .end {
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

    .clear {
        font-size: 33px;
        font-weight: bold;
        margin: 45px;
    }
`

function End() {
    // const url = window.location.href;

    return (
        <EndSection>
            <div className="end">
                <div className="clear">迷宮 脫出!</div>
                {/* <div className="share">트위터로 공유하기</div>
                <TwitterShareButton url={url}>
                    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                </TwitterShareButton> */}
            </div>
        </EndSection>
    )
}

export default End;