import styled from 'styled-components';

const Logo = styled.img`
  height: 50px; // 根据您的需求调整尺寸
  width: 50px; // 使 Logo 成为正方形
  border-radius: 50%; // 使图像呈现圆形
  object-fit: cover; // 确保图片按比例填充，不被拉伸
  padding: 0 20px;
`;
const Header = () => {
    return (
        <TopBar>
            <Logo src="/logo1.png" alt="网站Logo"></Logo>
            <ButtonGroup>
                <Button>首页</Button>
                <Button>游戏介绍</Button>
                <Button>玩家社区</Button>
            </ButtonGroup>
            <Button style={{marginLeft:'500px'}}>链接钱包</Button>
        </TopBar>
    );
};

export default Header;

// 样式化组件
const TopBar = styled.div`
  background-color: #B22222;
  color: white;
  display: flex;
  justify-content: flex-start;   //横向开始位置排列
  align-items: center; // 纵向
  padding: 5px 0;
`;
// 按钮组样式
const ButtonGroup = styled.div`
  width: 40%;
  display: flex;
  align-items: center; // 垂直居中对齐
  justify-content: space-around;   
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }

  &:focus {
    outline: 2px solid blue; // 示例：改为蓝色轮廓
  }
`;
