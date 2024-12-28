import { Badge } from '@radix-ui/themes';
import { cn } from '@/lib/utils';

export function CustomBadge({ className,text,size=3, color, ...props }) {
	return (
		<Badge size={size} color={color} className={cn('px-1 rounded', className)} {...props}>
            {text}
		</Badge>
	);
}
