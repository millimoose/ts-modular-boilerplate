///<reference path="is-hundred.d.ts"/>
import isHundred from 'is-hundred';
export function ddd(val: any): string {
	return isHundred(val);
}
