// import { useState, useEffect } from 'react'
import styled from "styled-components";
import {useContractRead} from "@starknet-react/core";
import abi from '../../contract/nft';
const nftAddress = '0x005a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426'
export default function playerRanking(){
    const { data, isError, isLoading, error } = useContractRead({
        functionName: "balanceOf",
        args: ["0x05643Ead2fc08d7C5F2b70CD151D9565a070010f348Ac49446Aa6C193a2d8323"],
        abi:abi,
        address: nftAddress,
        watch: true,
    });
    const players  = [{ name: '玩家1', score: 100 },
        { name: '玩家2', score: 90 },
        { name: '玩家3', score: 80 },]; // 这里是您的列表项
    if (isLoading) return <div>Loading ...</div>;
    if (isError || !data) return <div>{error?.message}</div>;

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

