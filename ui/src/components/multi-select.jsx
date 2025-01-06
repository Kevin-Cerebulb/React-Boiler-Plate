import { forwardRef } from 'react';
import ReactSelect from 'react-select';

/**
 * @type React.ForwardRefRenderFunction<StateManagedSelect, React.ComponentProps<typeof ReactSelect>>
 */
export const MultiSelect = forwardRef(({ isMulti = true, ...props }, ref) => {
	return (
		<ReactSelect
			ref={ref}
			isMulti={isMulti}
			hideSelectedOptions={false}
			{...props}
			theme={(theme) => ({
				...theme,
				colors: {
					...theme.colors,
					primary: '#8da4ef',
				},
			})}
			styles={{
				control: (baseStyles) => ({
					...baseStyles,
					minHeight: '32px',
					fontSize: '14px',
				}),
				input: (provided) => ({
					...provided,
					margin: '0px',
				}),
				valueContainer: (provided) => ({
					...provided,
					minHeight: '30px',
					padding: isMulti ? '0px 4px' : '0px 8px',
				}),
				indicatorsContainer: (provided) => ({
					...provided,
					height: '30px',
				}),
				menu: (base) => ({
					...base,
					fontSize: '14px',
					padding: '0px 4px',
					zIndex: 100,
				}),
				menuPortal: (base) => ({
					...base,
					zIndex: 50,
				}),
			}}
		/>
	);
});

MultiSelect.displayName = 'MultiSelect';
