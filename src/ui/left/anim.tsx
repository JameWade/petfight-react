// import React from 'react';
import styled from 'styled-components';
import Skill from "./skill.tsx";
import Weapon from "./weapon.tsx";
// import {useEffect, useRef, useState} from "react";
import Pet from "./pet.tsx";
import PhaserComponent from "./PhaserComponent .tsx";
import {useState} from "react";

export default function GameAnimation() {
    const [activeTab, setActiveTab] = useState('角色');


    return (
        <LeftSection>

            <AnimationContainer>
                <PhaserCntainer>
                    <PhaserComponent />
                </PhaserCntainer>
            </AnimationContainer>
            <Bar>
                <TabButton className={activeTab === '角色' ? 'active' : ''}
                           onClick={() => setActiveTab('角色')}
                >
                    角色
                </TabButton>
                <TabButton className={activeTab === '技能' ? 'active' : ''}
                           onClick={() => setActiveTab('技能')}>
                    技能
                </TabButton>
                <TabButton className={activeTab === '武器' ? 'active' : ''}
                           onClick={() => setActiveTab('武器')}>
                    武器
                </TabButton>
            </Bar>
            <ContentArea>
                {activeTab === '角色' && <Pet></Pet>}
                {activeTab === '技能' && <Skill/>}
                {activeTab === '武器' && <Weapon/>}
            </ContentArea>
        </LeftSection>
    );
};

// 左侧内容区域，用于展示游戏动画或其他内容
const LeftSection = styled.section`
  width: 50%; // 或者您想要的固定宽度
  height: auto; // 调整为适合您的布局
  flex: 1;
  margin-right: 10px; // 与右侧内容的间隔
  background-color: #FFF; // 一个示例背景色
  //padding: 20px; // 内边距
`;

// 样式化组件
const AnimationContainer = styled.div`
  background-color: #21232c;
  justify-content: center;
  align-items: center;
`;

const PhaserCntainer = styled.div`
  width: 100%; // 调整视频大小以适应容器
  height: 400px;
  display: flex;
  background-color: white; // 可以根据需要调整背景颜色
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 10px;
`;
const TabButton = styled.button`
  background-color: #555;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #777;
  }

  &.active {
    background-color: #999;
  }
`;
const ContentArea = styled.div`
  margin-top: 20px;
`;
