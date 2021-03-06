import { timeIsValid } from '../../../shared/utils';

export const isEmptyObject = obj => (
	Object.keys(obj).length === 0
);

export const isValidTimeObject = obj => Boolean(obj.minutes && obj.hours);

export const getNextEmptyObjectOnArray = arr => (
	arr.findIndex((element => (
		isEmptyObject(element) || !('hours' in element) || !('minutes' in element)
	)))
);

export const timeSetIsValid = (times) => {
	let comparisonTerm = 0;
	const isSequentialTime = (time) => {
		if (isEmptyObject(time)) {
			return true;
		}
		if (time && timeIsValid(time)) {
			const date = new Date(2017, 0, 1, time.hours, time.minutes, 0, 0);
			const isLaterThanComparison = date > comparisonTerm;
			comparisonTerm = Number(date);
			return isLaterThanComparison;
		}
		return false;
	};
	return times.every(isSequentialTime);
};

export const allTheTimesAreFilled = times => (
	getNextEmptyObjectOnArray(times) === -1
);

export const goBack = () => {
	window.history.back();
};
