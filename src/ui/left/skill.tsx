import styled from "styled-components";

export default function Skill(){
    const  skills = ['技能1','技能1','技能1','技能1','技能1','技能1','技能1','技能1','技能1'];
    return(
        <SkillsContainer>
            {skills.map((skill,index) =>(
                <SkillDiv key={index}>
                    {skill}
                </SkillDiv>

                ))}
        </SkillsContainer>
    )
}
const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-gap: 5px; // 设置网格之间的间隙
  background-color: #f8f8f8; // 背景颜色
  border-top: 1px solid #ddd; // 上边框，分隔线
  padding: 10px;
  margin-top: 20px; // 与动画区域的间隔
`;
const SkillDiv = styled.div`
  padding: 5px;
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 5px;
  // 根据需要添加其他样式
`;
