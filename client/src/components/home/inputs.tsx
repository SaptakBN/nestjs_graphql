import { useState } from "react";
import { Modal } from "../shared/modal";

export function HomeInputs() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center mb-4 gap-4">
        <input
          name="search"
          id="search"
          className="w-full border border-gray-300 rounded-md h-full px-4 py-2"
          placeholder="Search posts..."
          type="text"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[200px] cursor-pointer" onClick={() => setIsOpen(true)}>
          Create Post
        </button>
      </div>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)} title="Create Post">
        as
      </Modal>
    </>
  );
}
