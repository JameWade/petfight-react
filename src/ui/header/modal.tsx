import {useConnect} from "@starknet-react/core";
import styled from "styled-components";

// @ts-ignore

const  Modal = ({ show, onClose }) => {
        if (!show) {
            return null;
        }
    const {connect, connectors} = useConnect();
        return (
            <ModalContain >

                <Ul>
                    {connectors.map((connector) => (
                        <Li key={connector.id}>
                            <button onClick={() => connect({connector})}>
                                {connector.name}
                            </button>
                        </Li>
                    ))}
                </Ul>
                <Button onClick={onClose}>关闭</Button>
            </ModalContain>
        );
}
export default   Modal;
const ModalContain = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: orange;
  padding: 20px;
  zIndex: 1000
`;
const Ul = styled.ul`
  list-style-type: none; //去掉默认的 bullet 点
  margin: 0;
  padding: 0;
`
const  Li = styled.li`
  display: inline-block; //使li横向排列
  margin: 0 10px;
`
const Button = styled.button`
  margin-top: 10px;
`
