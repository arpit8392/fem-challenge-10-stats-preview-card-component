const Card = () => {
	return (
		<section className='grid max-w-xs grid-cols-1 overflow-hidden rounded-lg bg-blue-650 md:max-w-6xl md:grid-cols-2'>
			<figure className='relative md:order-1'>
				<img
					src='/images/image-header-desktop.jpg'
					alt='Desktop Header Image'
					className='hidden w-full md:block'
				/>
				<img
					src='/images/image-header-mobile.jpg'
					alt='Mobile Header Image'
					className='block w-full md:hidden'
				/>
				<div className='absolute inset-0 bg-violet-450 opacity-90 mix-blend-multiply'></div>
			</figure>
			<div className='flex flex-col space-y-4 px-8 py-10 text-center md:p-[72px] md:text-left'>
				<h1 className='text-3xl font-bold md:text-4xl/[44px]'>
					Get <span className='text-violet-450'>insights</span> that help your
					business grow.
				</h1>
				<p className='pb-10 text-sm leading-relaxed text-white/75 md:max-w-sm'>
					Discover the benefits of data analytics and make better decisions
					regarding revenue, customer experience, and overall efficiency.
				</p>
				<div className='flex flex-col space-y-4 md:flex-row md:items-center md:space-x-16 md:space-y-0'>
					<div>
						<h2 className='py-2 text-2xl font-bold'>10k+</h2>
						<p className='font-lexendDeca text-xs uppercase tracking-widest text-white/60'>
							Companies
						</p>
					</div>
					<div>
						<h2 className='py-2 text-2xl font-bold'>314</h2>
						<p className='font-lexendDeca text-xs uppercase tracking-widest text-white/60'>
							Templates
						</p>
					</div>
					<div>
						<h2 className='py-2 text-2xl font-bold'>12M+</h2>
						<p className='font-lexendDeca text-xs uppercase tracking-widest text-white/60'>
							Queries
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Card
