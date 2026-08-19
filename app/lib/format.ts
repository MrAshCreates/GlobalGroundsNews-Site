const DATE_LOCALE = "en-US";
const DATE_TIME_ZONE = "UTC";

const dateFormatter = new Intl.DateTimeFormat(DATE_LOCALE, {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: DATE_TIME_ZONE,
});

export function formatDateUtc(date: Date): string {
  return dateFormatter.format(date);
}

export function formatCount(value: number): string {
  return value.toLocaleString(DATE_LOCALE);
}

export function formatClosesOn(date: Date): string {
  return `Closes ${formatDateUtc(date)}`;
}

export function formatTimeRemaining(expiresAt: Date, now: Date): string {
  const diff = expiresAt.getTime() - now.getTime();

  if (diff <= 0) {
    return "Closed";
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (days > 0) {
    return `${days}d ${hours}h remaining`;
  }

  if (hours > 0) {
    return `${hours}h remaining`;
  }

  const minutes = Math.max(1, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
  return `${minutes}m remaining`;
}
