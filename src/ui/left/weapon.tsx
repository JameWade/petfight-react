import styled from "styled-components";

export default function Weapon(){
    const  weapons = ['武器1','技能1','技能1','技能1','技能1'];
    return (
        <WeaponsContainer>
            {weapons.map((weapon,index)  =>(
                <WeaponDiv key={index}>{weapon}</WeaponDiv>
            ))}
        </WeaponsContainer>
    )
}
const WeaponsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-gap: 5px; // 设置网格之间的间隙
  background-color: #b7c0e7; // 背景颜色
  border-top: 1px solid #ddd; // 上边框，分隔线
  padding: 10px;
  margin-top: 20px; // 与技能区域的间隔
`;
const WeaponDiv = styled.div`
  padding: 5px;
  text-align: center;
  background-color: #443535;
  color: #f9f9f9;
  border-radius: 5px;
`
