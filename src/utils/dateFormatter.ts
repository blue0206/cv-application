import { format } from 'date-fns';

export default function dateFormatter(dateString: string | undefined): string {
    if (!dateString) return "";

    const newDate = format(dateString, 'yyyy/MM');
    if (format(dateString, 'yyyy/MM/dd') === format(new Date(), 'yyyy/MM/dd')) return "Present";
    return newDate;
}