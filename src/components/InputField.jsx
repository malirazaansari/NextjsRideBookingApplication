import { X } from "lucide-react";

const InputField = ({ label, type = "text", placeholder,value, onChange }) => {

  return (
    <div className="relative mb-4">
  {label && (
    <label className="block mb-1 font-semibold text-[var(--color-foreground)] text-sm">
      {label}
    </label>
  )}
  <div className="relative">
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-[var(--color-background)] px-3 py-2 pr-10 border border-[var(--color-primary)] rounded-lg focus:outline-none focus:ring focus:ring-[var(--color-accent)] w-full text-[var(--color-foreground)]"
    />
    {value && (
      <button
        onClick={() => onChange({ target: { value: "" } })}
        className="top-1/2 right-2 absolute text-gray-500 hover:text-gray-700 -translate-y-1/2 transform"
      >
        <X size={18} />
      </button>
    )}
  </div>
</div>

);
};

export default InputField;
