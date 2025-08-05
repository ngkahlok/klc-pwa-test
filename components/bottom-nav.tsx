import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBook, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons'

const BottomNav = () => {
	const router = useRouter()

	return (
		// <div className='sm:hidden'>
		<div >
			<nav className='fixed bottom-0 w-full max-w-[440px] pb-safe bg-white'>
				{/* Centered content wrapper with max width */}
				{/* <div className="mx-auto w-full max-w-[440px] border-t bg-white pb-safe dark:border-zinc-300"> */}
				<div
					className="mx-auto w-full max-w-[440px] bg-white pb-safe"
					style={{ boxShadow: '0 -2px 6px rgba(0, 0, 0, 0.08)' }}
				>
					<div className='mx-auto flex h-20 max-w-md items-center justify-around px-6'>
						{links.map(({ href, label, icon }) => (
							<Link
								key={label}
								href={href}
								className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${router.pathname === href
									? 'text-indigo-500 dark:text-indigo-400'
									: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
									}`}
							>
								{/* {icon} */}
								<FontAwesomeIcon icon={icon} className="h-10 w-10" />
								<span className='text-md text-zinc-600 dark:text-zinc-400'>
									{label}
								</span>
							</Link>
						))}
					</div>
				</div>
			</nav>
		</div>
	)
}

export default BottomNav

const links = [
	{
		label: 'Home',
		href: '/',
		icon: faHouse,
	},
	{
		label: 'Catalogue',
		href: '/story',
		icon: faBook,
	},
	{
		label: 'Orders',
		href: '/recipes',
		icon: faReceipt,
	},
	{
		label: 'Me',
		href: '/recipes',
		icon: faUser,
	},
]
