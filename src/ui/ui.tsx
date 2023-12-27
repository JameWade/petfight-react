import { Wrapper } from "./wrapper";
import '../App.css';
import Header from './header/header'
import Right from "./right/playerRanking.tsx";
import GameAnimation from "./left/anim.tsx";
import styled from 'styled-components';
 function Ui() {
  return (
    <Wrapper>
      <Header></Header>
        <MainContainer>
            <GameAnimation/>
            <Right/>
        </MainContainer>

    </Wrapper>
  );
}
// 样式化布局容器
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;  /* 添加 20px 的上边距 */
  gap: 10px; // 创建 20px 的间隙
  margin-left: 150px;
  margin-right: 150px;
`;
export default Ui;
