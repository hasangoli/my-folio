import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { FC, PropsWithChildren } from 'react';
import './globals.css';
import { Providers } from './providers';

const iSans = localFont({
	src: '../public/assets/fonts/IRANSansWeb(FaNum).ttf',
});

export const metadata: Metadata = {
	title: 'Hasan Goli',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang='fa' dir='rtl'>
			<body className={iSans.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
