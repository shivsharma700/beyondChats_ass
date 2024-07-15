import { format, isToday, isYesterday, isThisWeek, parseISO } from 'date-fns';

const formatDate = (dateString: string): string => {
  const date = parseISO(dateString);

  if (isToday(date)) {
    return format(date, 'HH:mm');
  } else if (isYesterday(date)) {
    return 'Yesterday';
  } else if (isThisWeek(date, { weekStartsOn: 1 })) {
    return format(date, 'EEEE');
  } else {
    return format(date, 'dd/MM/yyyy');
  }
};

export default formatDate;