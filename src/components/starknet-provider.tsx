import React from "react";
import {sepolia, mainnet} from "@starknet-react/chains";
import {
    StarknetConfig,
    // publicProvider,
    argent,
    braavos,
    useInjectedConnectors,
    voyager, alchemyProvider
} from "@starknet-react/core";

const provider = alchemyProvider({ apiKey:"tNfU05ArgHTFnCyIFki-MDYOXFA8235C" });
export function StarknetProvider({children}: { children: React.ReactNode }) {
    const {connectors} = useInjectedConnectors(
        {
            // Show these connectors if the user has no connector installed.
            recommended: [
                argent(),
                braavos(),
            ],
            // Hide recommended connectors if the user has any connector installed.
            includeRecommended: "onlyIfNoConnectors",
            // Randomize the order of the connectors.
            order: "random"
        }
    );
    return (<StarknetConfig chains={[mainnet, sepolia]}
                            provider={provider}
                            connectors={connectors}
                            explorer={voyager}>
            {children}
        </StarknetConfig>
    )
}
