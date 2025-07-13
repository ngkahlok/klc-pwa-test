import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import ResponsiveBackground from '@/components/Responsivebackground';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			disableTransitionOnChange
		>
			<ResponsiveBackground>
			<Component {...pageProps} />
			</ResponsiveBackground>
		</ThemeProvider>
	)
}
