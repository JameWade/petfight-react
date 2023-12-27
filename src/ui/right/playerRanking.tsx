// import { useState, useEffect } from 'react'
import styled from "styled-components";
export default function playerRanking(){
    const players  = [{ name: '玩家1', score: 100 },
        { name: '玩家2', score: 90 },
        { name: '玩家3', score: 80 },]; // 这里是您的列表项
    return <ListContainer>
        <RankingList>
            {
                players .map((player,index)   =>(
                    <Player key={index}>
                        <Rank>{index + 1} 、 </Rank>
                        <Name>{player.name}</Name>
                        <Score>{player.score}</Score>
                    </Player>
                ))
            }
        </RankingList>
    </ListContainer>
}


const ListContainer = styled.aside`
  width: 35%;
  height: 700px;
  background-color: #efe7e7;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  //display: flex;
`
// 样式化组件
const RankingList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Player = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 5px;
  background-color: #f3f3f3;
  &:hover {
    background-color: #3ddc15;
    cursor: pointer;
  }
`;

const Rank = styled.span`
  // 排名样式
`;

const Name = styled.span`
  // 玩家名称样式
`;

const Score = styled.span`
  // 玩家得分样式
`;

