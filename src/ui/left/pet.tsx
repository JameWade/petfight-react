import styled from "styled-components";

export default function Pet() {
    const attributes = [
        {name: '体力', value: '80%'},
        {name: '活力', value: '80%'},
        {name: '生命', value: '80%'},
        {name: '力量', value: '80%'},
        {name: '敏捷', value: '80%'},
        {name: '速度', value: '80%'},
    ]

    return (
        <PetContainer>
            <PetImage src="/pet2.png"></PetImage>
            <AttributeContainer>
                {
                    attributes.map(attr =>(
                        <Attribute key={attr.name}>
                            <AttributeName>{attr.name}</AttributeName>
                            <EnergyBarContainer>
                                <EnergyBar width={attr.value} ></EnergyBar>
                            </EnergyBarContainer>
                        </Attribute>
                    ))
                }

            </AttributeContainer>
        </PetContainer>
    );
}

const PetContainer = styled.div`
  display: flex;
  padding: 20px;
`

const PetImage = styled.img`
  width: 150px;
  height: auto;
  margin-right: 20px;
`
//属性列表容器
const AttributeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const Attribute = styled.div`
  display: flex;
  align-items: center;
`
// 属性名称
const AttributeName = styled.span`
  width: 80px; // 根据需要调整
`;
// 能量条容器
const EnergyBarContainer = styled.div`
  width: 200px;                                         //这里必须设置宽度，不然子容器的比例将不会生效
  flex-grow: 1;
  background-color: #ddd; // 能量条背景色
  margin-left: 10px;
  border-radius: 5px;
`;

// 能量条
const EnergyBar = styled.div<EnergyBarProps>`
  background-color: #4caf50; // 能量条填充色
  height: 20px; // 能量条高度
  width: ${props => props.width}; // 根据属性动态设置宽度
  border-radius: 5px;
`;
interface EnergyBarProps {
    width: string;
}
