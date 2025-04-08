'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

/**
 * Toaster component that wraps the Sonner library's Toaster component.
 * It provides a consistent theme and styling for notifications.
 *
 * @param {ToasterProps} props - The properties to pass to the Sonner Toaster.
 * @returns {JSX.Element} The Toaster component.
 */

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className='toaster group'
			expand={false}
			duration={4000}
			richColors
			closeButton
			toastOptions={{
				classNames: {
					toast:
						'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:rounded-md',
					description: 'group-[.toast]:text-muted-foreground',
					actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
					cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
					success:
						'group-[.toast]:border-green-200 group-[.toast]:bg-green-50 group-[.toast]:bg-opacity-30 group-[.toast]:text-green-800 dark:group-[.toast]:border-green-800 dark:group-[.toast]:bg-green-950 dark:group-[.toast]:bg-opacity-20 dark:group-[.toast]:text-green-300',
					error:
						'group-[.toast]:border-red-200 group-[.toast]:bg-red-50 group-[.toast]:bg-opacity-30 group-[.toast]:text-red-800 dark:group-[.toast]:border-red-800 dark:group-[.toast]:bg-red-950 dark:group-[.toast]:bg-opacity-20 dark:group-[.toast]:text-red-300',
					info: 'group-[.toast]:border-blue-200 group-[.toast]:bg-blue-50 group-[.toast]:bg-opacity-30 group-[.toast]:text-blue-800 dark:group-[.toast]:border-blue-800 dark:group-[.toast]:bg-blue-950 dark:group-[.toast]:bg-opacity-20 dark:group-[.toast]:text-blue-300',
					warning:
						'group-[.toast]:border-yellow-200 group-[.toast]:bg-yellow-50 group-[.toast]:bg-opacity-30 group-[.toast]:text-yellow-800 dark:group-[.toast]:border-yellow-800 dark:group-[.toast]:bg-yellow-950 dark:group-[.toast]:bg-opacity-20 dark:group-[.toast]:text-yellow-300',
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
