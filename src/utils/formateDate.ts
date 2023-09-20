function formatDate(inputDate: string): string {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const parts = inputDate.split('-');
  if (parts.length !== 3) {
    throw new Error(
      'Invalid date format. Please provide a date in "YYYY-MM-DD" format.'
    );
  }

  const year = parts[0];
  const monthIndex = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);

  if (isNaN(monthIndex) || isNaN(day)) {
    throw new Error('Invalid date format. Please provide a valid date.');
  }

  const month = months[monthIndex];

  const daySuffix = getDaySuffix(day);

  return `${month}, ${day}${daySuffix} ${year}`;
}

function getDaySuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export default formatDate;
