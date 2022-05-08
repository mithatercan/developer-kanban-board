const updateStorage = (action) => {
  const localData = JSON.parse(localStorage.getItem("data"));

  switch (action.type) {
    case "edit":
      const updatedData = localData.map((task) =>
        task.uid === action.payload.uid ? action.payload : task
      );
      localStorage.setItem("data", JSON.stringify(updatedData));
      break;

    case "delete":
      const filteredData = localData.filter((task) => task.uid !== action.payload.uid);
      localStorage.setItem("data", JSON.stringify(filteredData));
      break;

    case "add":
      localData.push(action.payload);
      localStorage.setItem("data", JSON.stringify(localData));
      break;

    case "change-status":
      const changedData = localData.map((task) =>
        task.uid === action.payload.uid ? { ...task, status: action.payload.status } : task
      );
      localStorage.setItem("data", JSON.stringify(changedData));
      break;

    default:
      break;
  }
};

export default updateStorage;
