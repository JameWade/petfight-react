import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  //pointer-events: none;   //这破玩意害我debug一天，加了之后导致元素不会响应鼠标点击、悬停等事件，这些事件会“穿透”该元素并被下面的元素捕获。
`;
