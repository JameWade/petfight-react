import styled from 'styled-components';
import {useAccount, useBalance} from "@starknet-react/core";
import {useState} from "react";
import Modal from './modal.tsx';

const Logo = styled.img`
  height: 50px; // 根据您的需求调整尺寸
  width: 50px; // 使 Logo 成为正方形
  border-radius: 50%; // 使图像呈现圆形
  object-fit: cover; // 确保图片按比例填充，不被拉伸
  padding: 0 20px;
`;
const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };
    return (
        <TopBar>
            <Logo src="/logo1.png" alt="网站Logo"></Logo>
            <ButtonGroup>
                <Button>首页</Button>
                <Button>游戏介绍</Button>
                <Button>玩家社区</Button>
            </ButtonGroup>
            <Balance />
            <Button onClick={handleOpen} style={{marginLeft:'400px',marginRight:'50px'}}>链接钱包</Button>
            <Modal show ={showModal} onClose = {handleClose}></Modal>
        </TopBar>
    );
};

const Balance = ()=>{
    const { address } = useAccount();
    const  { isLoading, isError, error, data } = useBalance({
        address,
        watch:true
    });
    if (isLoading) return <div>Loading ...</div>;
    if (isError || !data) return <div>{error?.message}</div>;
    return <div>{formatWithDecimals(data.value,data.decimals)}{data.symbol}</div>
}
function formatWithDecimals( value: bigint, decimals: number): string {
    // 将bigint值转换为字符串
    const valueStr = value.toString();
    const len = valueStr.length;

    // 如果value的长度小于decimals，需要在前面补零
    const paddedValueStr = len < decimals ? '0'.repeat(decimals - len) + valueStr : valueStr;

    // 插入小数点
    const beforeDecimal = paddedValueStr.slice(0, -decimals) || '0';
    const afterDecimal = paddedValueStr.slice(-decimals);

    return formatToTwoDecimalPlaces(`${beforeDecimal}.${afterDecimal}`);
}
function formatToTwoDecimalPlaces(str: string): string {
    // 查找小数点的位置
    const dotIndex = str.indexOf('.');

    // 如果没有小数点或小数点后没有数字，补足两个零
    if (dotIndex === -1 || dotIndex === str.length - 1) {
        return `${str}.00`;
    }

    // 如果只有一个小数位，补足一个零
    if (dotIndex === str.length - 2) {
        return `${str}0`;
    }

    // 如果小数位超过两位，截取前两位
    return str.substring(0, dotIndex + 5);
}

// 使用示例


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
