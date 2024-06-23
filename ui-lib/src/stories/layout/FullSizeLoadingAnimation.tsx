import FlexColumn from './FlexColumn';

const FullSizeLoadingAnimation = () => {
	return (
		<FlexColumn classNames="justify-center items-center">
			<span className="loading loading-ring loading-lg"></span>
		</FlexColumn>
	);
};

export default FullSizeLoadingAnimation;
