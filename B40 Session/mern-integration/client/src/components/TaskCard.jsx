const TaskCard = ({ task }) => {
  const { title, status, description, deadLine } = task;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-all h-full">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-gray-800 text-lg line-clamp-1">
          {title}
        </h3>
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {status}
        </span>
      </div>
      <p className="text-gray-500 text-sm line-clamp-3 grow">{description}</p>
      <div className="pt-4 mt-auto border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
        <span>Deadline:</span>
        <span className="font-medium text-gray-700">{deadLine}</span>
      </div>
    </div>
  );
};

export default TaskCard;
