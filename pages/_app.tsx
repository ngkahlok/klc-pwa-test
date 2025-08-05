import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'
import '@/styles/globals.css'
import ResponsiveBackground from '@/components/Responsivebackground';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import SplashScreen from '@/components/SplashScreen';

export default function App({ Component, pageProps }: AppProps) {
	const [showSplash, setShowSplash] = useState(true);

	const handleSplashComplete = () => {
		setShowSplash(false);
	};

	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			disableTransitionOnChange
		>
			{showSplash ? (
				<SplashScreen onComplete={handleSplashComplete} />
			) : (
				<ResponsiveBackground>
					<Component {...pageProps} />
				</ResponsiveBackground>
			)}
		</ThemeProvider>
	)
}
