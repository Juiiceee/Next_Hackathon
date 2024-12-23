"use client";
import '@rainbow-me/rainbowkit/styles.css';
import {
	getDefaultConfig,
	RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
	mainnet,
	arbitrum,
	sepolia,
	anvil
} from 'wagmi/chains';
import {
	QueryClientProvider,
	QueryClient,
} from "@tanstack/react-query";
import React from 'react';

const config = getDefaultConfig({
	appName: 'My RainbowKit App',
	projectId: '',
	chains: [mainnet, arbitrum, sepolia, anvil],
	ssr: true,
});

const queryClient = new QueryClient();
const CustomProvider = ({ children, }: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider>
					{children}
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
};
export default CustomProvider;