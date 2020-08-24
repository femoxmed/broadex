// All Pages Animation
export const pageWrapperVariants = {
	initial: {
		opacity: 0,
		y: 700,
		stiffness: 0.5,
	},

	animate: {
		opacity: 1,
		y: 0,
		delay: 0.5,
		// OriginX: 150,
		transition: { delay: 0.5, duration: 1.5, type: 'spring' },
		when: 'afterChildren',
		damping: 20,
		stiffness: 100,
	},
	exit: {
		opacity: 0,
		y: 700,
		// duration: 1.5,
		// transition: { ease: 'easeInOut' },
	},
};
