import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	Icon: React.ElementType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, Icon, type, ...props }, ref) => {
		return (
			<div className="relative">
				<input
					type={type}
					className={cn(
						"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ps-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
						className,
					)}
					ref={ref}
					{...props}
				/>
				<i className="absolute left-0 top-0 h-full px-3 py-3 hover:bg-transparent">
					{Icon && <Icon color="#718EBF" size="1rem" strokeWidth={1} />}
				</i>
			</div>
		);
	},
);
Input.displayName = "Input";

export { Input };
