import { Check, Circle } from "lucide-react";

const ProgressTracker = () => {
  return (
    // <div className="flex items-center my-4 w-full">
    //   <div className="relative flex items-center">
    //     <div className="flex justify-center items-center border-4 border-blue-500 rounded-full w-10 h-10 font-bold text-blue-500 text-lg">
    //       1
    //     </div>
    //   </div>

    //   <div className="flex-1 bg-blue-500 h-2"></div>

    //   <div className="relative flex items-center">
    //     <div className="flex justify-center items-center bg-blue-500 rounded-full w-10 h-10 text-white">
    //       <Check size={24} />
    //     </div>
    //   </div>
    // </div>
    <div className="flex items-center my-4 w-full">
  <div className="relative flex items-center">
    <div className="flex justify-center items-center border-[var(--color-primary)] border-4 rounded-full w-10 h-10 font-bold text-[var(--color-primary)] text-lg">
      1
    </div>
  </div>

  <div className="flex-1 bg-[var(--color-primary)] h-2"></div>

  <div className="relative flex items-center">
    <div className="flex justify-center items-center bg-[var(--color-primary)] rounded-full w-10 h-10 text-white">
      <Check size={24} />
    </div>
  </div>
</div>

  );
};

export default ProgressTracker;
