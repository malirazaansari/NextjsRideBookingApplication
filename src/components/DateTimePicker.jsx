const DateTimePicker = ({
  selectedDate,
  selectedHour,
  selectedMinute,
  onDateChange,
  onHourChange,
  onMinuteChange,
  isLaterSelected,
  onNowClick,
  onLaterClick,
}) => (
<div className="flex items-center gap-2 mt-4">
  <button
    type="button"
    className={`px-4 py-2 rounded-lg ${
      !isLaterSelected
        ? "bg-[var(--color-primary)] text-white"
        : "bg-[var(--color-secondary)] text-[var(--color-foreground)]"
    }`}
    onClick={onNowClick}
  >
    Now
  </button>
  <button
    type="button"
    className={`px-4 py-2 rounded-lg ${
      isLaterSelected
        ? "bg-[var(--color-primary)] text-white"
        : "bg-[var(--color-secondary)] text-[var(--color-foreground)]"
    }`}
    onClick={onLaterClick}
  >
    Later
  </button>
  <input
    type="date"
    className="bg-[var(--color-background)] p-2 border border-[var(--color-primary)] rounded-lg text-[var(--color-foreground)]"
    value={selectedDate}
    onChange={(e) => onDateChange(e.target.value)}
  />
  <select
    className="bg-[var(--color-background)] p-2 border border-[var(--color-primary)] rounded-lg text-[var(--color-foreground)]"
    value={selectedHour}
    onChange={(e) => onHourChange(e.target.value)}
  >
    {[...Array(24)].map((_, i) => (
      <option key={i} value={i}>
        {i}
      </option>
    ))}
  </select>
  <p className="text-[var(--color-foreground)]">:</p>
  <select
    className="bg-[var(--color-background)] p-2 border border-[var(--color-primary)] rounded-lg text-[var(--color-foreground)]"
    value={selectedMinute}
    onChange={(e) => onMinuteChange(e.target.value)}
  >
    {[...Array(12)].map((_, i) => {
      const value = i * 5;
      return (
        <option key={value} value={value}>
          {value.toString().padStart(2, "0")}
        </option>
      );
    })}
  </select>
</div>

);


export default DateTimePicker;
