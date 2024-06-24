import Button from '@ui-lib/button/Button';
import Checkbox from '@ui-lib/input/Checkbox';
import TextInput from '@ui-lib/input/TextInput';
import H1 from '@ui-lib/typography/H1';
import { HiArrowRightEndOnRectangle, HiOutlineEnvelope, HiOutlineKey } from 'react-icons/hi2';

export default function page() {
	return (
		<>
			<H1 className="text-center">Login</H1>
			<TextInput type="email" label="Email Address" placeholder="Email address" innerNode={<HiOutlineEnvelope size={20} />} />
			<TextInput type="password" label="Password" placeholder="Password" innerNode={<HiOutlineKey size={20} />} />
			<Checkbox label="I agree with terms and conditions" />
			<Button
				label={
					<>
						<HiArrowRightEndOnRectangle />
						Login
					</>
				}
				className="my-4"
				theme="primary"
			/>
		</>
	);
}
