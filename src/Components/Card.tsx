import React from 'react'
import styled from 'styled-components'

interface PropType {
    ImgUrl: string;
    name: string;
    time: string;
    desc: string;
    ImgUrl2: string;
    reply: string;
    count: number;  
    setCount: React.Dispatch<React.SetStateAction<number>>; 
}

const Card = ({ ImgUrl, name, time, desc, count, ImgUrl2, reply, setCount }: PropType) => {

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    };

    return (
        
            <SDiv>
                <IDiv>
                    <img src={ImgUrl} alt="FirstGirlPhoto" />
                    <HH3>{name}</HH3>
                    <HH4>{time}</HH4>
                </IDiv>
                <DDiv>
                    <PP>{desc}</PP>
                </DDiv>
                <PDiv>
                    <GDiv>
                    <Btn onClick={increase}><h2>+</h2></Btn>
                    <Hh2>{count}</Hh2>
                    <Btn2 onClick={decrease}><h2>-</h2></Btn2>
                    </GDiv>
                    <ADiv>
                        <img src={ImgUrl2} alt="" />
                        <HH6>{reply}</HH6>
                    </ADiv>
                </PDiv>
            </SDiv>
    )
}

export default Card



const SDiv = styled.div`
    width: 343px;
    height: 256px;
    background-color: #fff;
    border-radius: 8px;
    margin-top: 32px;
    margin-bottom: 16px;
`

const IDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 10px;
`

const DDiv = styled.div`
    padding: 0 16px 0 16px;
`

const PDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
`

const Btn = styled.button`
    height: 32px;
    width: 32px;
    border: none;
    outline: none;
    border-radius: 5px 0 0 5px;
    background-color:#F5F6FA;
    cursor: pointer;
    font-size: 30px;
    color: #C5C6EF;
`
const Btn2 = styled.button`
    height: 32px;
    width: 32px;
    border: none;
    outline: none;
    border-radius: 0 5px 5px 0;
    background-color:#F5F6FA;
    cursor: pointer;
    font-size: 30px;
    color: #C5C6EF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4px;
`

const Hh2 = styled.h2`
    width: 32px;
    height: 32px;
    background-color: #F5F6FA;
    display: flex;
    justify-content: center;
    align-items: center;
`

const GDiv = styled.div`
      display: flex;
    align-items: center;
    padding-left: 16px;
`

const ADiv = styled.div`
    display: flex;
    padding-right: 16px;
    gap: 10px;
`

const HH3 = styled.h3`
    color: #334253;
    font-size: 16px;
    font-family: Rubik;
    font-weight: 400;
    word-wrap: break-word;
`
const HH4 = styled.h3`
     color: #67727E;
    font-size: 16px;
    font-family: Rubik;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
`
const HH6 = styled.h3`
   color: #5357B6;
    font-size: 16px;
    font-family: Rubik;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
`
const PP = styled.h3`
   color: #67727E;
    font-size: 15.5px;
    font-family: Rubik;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
`
