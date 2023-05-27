import './globals.css'
import { Inter, Lexend_Deca } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lexend_deca = Lexend_Deca({
	subsets: ['latin'],
	variable: '--font-lexend-deca',
})

export const metadata = {
	title: 'Stats Preview Card',
	description:
		'FEM challenge | Stats Preview Card Component | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.variable} ${lexend_deca.variable} bg-blue-850 font-sans text-white scroll-smooth`}>
				{children}
			</body>
		</html>
	)
}
