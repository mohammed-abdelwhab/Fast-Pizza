import { useEffect } from "react";
function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  isDestructive = false,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="w-full max-w-md rounded-xl bg-cream-50 p-6 shadow-xl ring-1 ring-mustard-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header & Icon */}
        <div className="flex items-start gap-4">
          {isDestructive && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
          )}
          <div>
            <h3
              id="modal-title"
              className="font-display text-2xl font-bold text-stone-900"
            >
              {title}
            </h3>
            <p className="mt-2 font-body text-base text-stone-700">{message}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          {/* Cancel Button: Uses cream-100 background */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-mustard-200 bg-cream-100 px-4 py-2 text-sm font-medium text-stone-800 hover:bg-mustard-100 focus:outline-none focus:ring-2 focus:ring-mustard-300"
          >
            {cancelText}
          </button>

          {/* Confirm Button: Uses basil-500 for standard actions, mustard-600/700 (or red-600) for destructive */}
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cream-50 ${
              isDestructive
                ? "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                : "bg-basil-500 hover:bg-basil-500/90 focus:ring-basil-500"
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
