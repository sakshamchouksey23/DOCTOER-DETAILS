import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingData = () => {
	return (
		<div className='w-full min-h-[400px] flex items-center justify-center'>
			<Loader2 className='animate-spin repeat-infinite' />
		</div>
	);
};

export default LoadingData;
