import {CalendarIcon} from 'lucide-react';

import {Calendar} from '@/components/shadcn-ui/calendar';
import {cn, dateDisplayFormat, datePPPFormat} from '@/lib/utils';
import {Button, Flex, Popover, Text} from '@radix-ui/themes';
import {useState} from 'react';
import {Show} from './show';
import {Spacer} from './spacer';

/**
 * @param {{
 * label: string,
 * date: [Date] | date;
 * className: string
 * onDateChange: React.Dispatch<(prevState: undefined) => undefined>
 * mode: 'single' | 'range'
 * buttonProps: React.ComponentProps<Button>
 * canClear: Boolean
 * }} props
 * @returns
 */
export function DatePicker({
	date,
	onDateChange,
	label = 'Pick a date',
	mode = 'single',
	className,
	buttonProps,
	canClear = true,
	...props
}) {
	let [selected, setSelected] = useState(date);
	let [open, setOpen] = useState(false);

	const selectedDateHandler = (date) => {
		setSelected(date);
		if (onDateChange) {
			onDateChange(date);
		}
	};

	const todayHandler = () => {
		if (mode === 'single') {
			selectedDateHandler(new Date());
		} else if (mode === 'range') {
			selectedDateHandler({
				from: new Date(),
				to: new Date(),
			});
		}

		setOpen(false);
	};

	return (
		<Popover.Root open={open} onOpenChange={setOpen}>
			<Popover.Trigger className={cn('w-auto justify-start', className)}>
				<Button
					variant="surface"
					size="2"
					color="gray"
					highContrast={!!date}
					{...buttonProps}
				>
					<CalendarIcon className="size-4" />
					<Text as="span" weight="regular">
						{date
							? mode === 'single'
								? datePPPFormat(date)
								: `${date?.from ? datePPPFormat(date.from) : ''} ${date?.to ? ' - ' + datePPPFormat(date.to) : ''}`
							: label}
					</Text>
				</Button>
			</Popover.Trigger>
			<Popover.Content className="w-auto min-w-0 p-0" align="start">
				<Calendar
					mode={mode}
					today={mode === 'single' ? selected : undefined}
					selected={date}
					onSelect={selectedDateHandler}
					initialFocus
					{...props}
				/>
				<Show when={canClear}>
					<Flex align="center" color="gray" px="4" pb="4" mt="-2">
						<Button
							size="1"
							variant="outline"
							color="gray"
							onClick={todayHandler}
							className="font-medium"
						>
							Today
						</Button>
						<Spacer />
						<Text size="1" weight="medium">
							{selected &&
								(mode === 'single'
									? dateDisplayFormat(selected)
									: `${dateDisplayFormat(selected.from)} -
								${dateDisplayFormat(selected.to)}`)}
						</Text>
					</Flex>
				</Show>
			</Popover.Content>
		</Popover.Root>
	);
}
