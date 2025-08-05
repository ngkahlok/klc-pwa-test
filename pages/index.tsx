import { useState, useEffect } from 'react'
import Page from '@/components/page'
import Section from '@/components/section'
import BottomNav from '@/components/bottom-nav'

const Index = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [currentPromoSlide, setCurrentPromoSlide] = useState(0)
	
	// Banner images - you can replace these with your actual images
	const bannerImages = [
		'/images/sewing-theme-background.jpg',
		'/images/sewing-theme-background2.avif',
		'/images/sewing-theme-background3.avif',
		'/images/sewing-theme-background3.jpg'
	]

	// Promotional banner content
	const promoBanners = [
		{
			title: "Special Offer",
			subtitle: "20% off on all sewing supplies",
			color: "bg-blue-500"
		},
		{
			title: "New Arrivals",
			subtitle: "Check out our latest fabrics",
			color: "bg-green-500"
		},
		{
			title: "Free Delivery",
			subtitle: "On orders above RM50",
			color: "bg-purple-500"
		}
	]

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
		}, 5000) // Change slide every 5 seconds

		return () => clearInterval(timer)
	}, [bannerImages.length])

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentPromoSlide((prev) => (prev + 1) % promoBanners.length)
		}, 3000) // Faster rotation for promotional banners

		return () => clearInterval(timer)
	}, [promoBanners.length])

	return (
		<div className="min-h-screen flex flex-col">
			{/* Image Carousel Section - 40% of screen */}
			<div className="relative h-[40vh] overflow-hidden">
				{bannerImages.map((image, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							index === currentSlide ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<img
							src={image}
							alt={`Banner ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
				
				{/* Slide indicators */}
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
					{bannerImages.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-2 h-2 rounded-full transition-colors ${
								index === currentSlide ? 'bg-white' : 'bg-white/50'
							}`}
						/>
					))}
				</div>
			</div>

			{/* Customer Information */}
			<div className="flex flex-col items-center justify-center">
				<div className="w-full max-w-[88%] h-[20vh] bg-white mt-[-15%] z-10 shadow-lg flex items-center justify-center">
					<span className="text-lg text-gray-700">Square Card Content</span>
				</div>
			</div>

			{/* Order Type */}
			<div className=" mt-[5%] flex flex-row items-center justify-center gap-[4%]">
				<button 
					className="w-full max-w-[42%] h-[15vh] flex items-center justify-center bg-[#F1E1D0]/50 active:bg-[#F1E1D0]/70 active:scale-95 transition-all duration-150 rounded-lg"
					onClick={() => console.log('In Store/Pick Up selected')}
				>
					<span className="text-lg text-gray-700">In Store/ Pick Up</span>
				</button>
				<button 
					className="w-full max-w-[42%] h-[15vh] flex items-center justify-center bg-[#F1E1D0]/50 active:bg-[#F1E1D0]/70 active:scale-95 transition-all duration-150 rounded-lg"
					onClick={() => console.log('Delivery selected')}
				>
					<span className="text-lg text-gray-700">Delivery</span>
				</button>
			</div>

			{/* Promotional Banner Carousel */}
			<div className="mt-[5%] flex flex-col items-center justify-center">
				<div className="w-full max-w-[88%] h-[12vh] bg-white z-10 shadow-lg rounded-lg overflow-hidden relative">
					{promoBanners.map((banner, index) => (
						<div
							key={index}
							className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center ${
								index === currentPromoSlide ? 'opacity-100' : 'opacity-0'
							} ${banner.color}`}
						>
							<h3 className="text-white font-bold text-lg mb-1">{banner.title}</h3>
							<p className="text-white text-sm">{banner.subtitle}</p>
						</div>
					))}
					
					{/* Promo slide indicators */}
					<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
						{promoBanners.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentPromoSlide(index)}
								className={`w-1.5 h-1.5 rounded-full transition-colors ${
									index === currentPromoSlide ? 'bg-white' : 'bg-white/50'
								}`}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Bottom Navigation */}
			<BottomNav />
		</div>
	)
}

export default Index
