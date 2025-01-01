import { CerebulbLogo } from './icons/cerebulb';

export function Footer() {
	return (
		<footer className="bg-muted/70 text-sm leading-6">
			<div className="bg-gradient h-0.5" />
			<div className="max-w-8xl flex flex-wrap h-12 items-center justify-between gap-3 px-4 text-foreground/80">
				<p>
					Copyright {<span className="">&#169;</span>} 2024 Company Limited,{' '}
					<a
						href="#"
						target="_blank"
						className="font-medium text-foreground/80 underline transition-all hover:underline-offset-2"
					>
						Legal Notice
					</a>{' '}
					&{' '}
					<a
						href="#"
						target="_blank"
						className="font-medium text-foreground/80 underline transition-all hover:underline-offset-2"
					>
						Cookie Policy
					</a>
				</p>
				<p className="flex items-center gap-1 text-sm font-medium">
					Design and Developed by: <CerebulbLogo />
				</p>
			</div>
		</footer>
	);
}
