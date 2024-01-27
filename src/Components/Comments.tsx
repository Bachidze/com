import styled from 'styled-components'

interface proptype2 {
    ImgUrl4:string
}
const Comments = ({ImgUrl4}:proptype2) => {
  return (

    <MDiv>
        <Border>
            <INp maxlength={27} type="text" placeholder='Add a comment…'/>
        </Border>

        <Flex>
            <img src={ImgUrl4} alt="" />
            <Btn3>Send</Btn3>
        </Flex>
    </MDiv>
  )
}

export default Comments


const MDiv = styled.div`
    width: 343px;
    height: 186px;
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    @media (width >= 1440px){
        width: 730px;
        height: 200px;
        margin-bottom: 30px;
    }
`

const Border = styled.div`
    border: 2px solid #E9EBF0;
    border-radius: 8px;
    display: flex;
    padding-left: 16px;
    padding-top: 10px;
    padding-bottom: 60px;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
`

const Btn3 = styled.button`
    width: 104px;
    height: 48px;
    background-color: #5357B6;
    border: none;
    outline: none;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    font-family: Rubik;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
    cursor: pointer;
`
const INp = styled.input`
color: #334253;
    font-size: 16px;
    font-family: Rubik;
    font-weight: 400;
    word-wrap: break-word;
    border: none;
    outline: none;
    width: 100%;
`