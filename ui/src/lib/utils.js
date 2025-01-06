import { clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * format Date to 'dd-MM-yyyy' for display
 * @param {Date} date
 * @returns {string}
 */
export function dateDisplayFormat(date) {
	return format(new Date(date), 'dd-MM-yyyy');
}

/**
 * format Date to 'July 1st, 2024' for display
 * @param {Date} date
 * @returns {string}
 */
export function datePPPFormat(date) {
	return format(new Date(date), 'PPP');
}

export function parseError(errors) {
	let error = {};
	Object.entries(errors).forEach(([key, value]) => {
		error[key] = value._errors?.[0];
	});

	return error;
}
