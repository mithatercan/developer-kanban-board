const initData = () => {
  const localStorageData = JSON.parse(localStorage.getItem("data"));

  if (localStorageData) {
    localStorageData.forEach((task) => {
      const todoBoard = document.querySelector(".todo .inner");
      const inProgressBoard = document.querySelector(".in-progress .inner");
      const doneBoard = document.querySelector(".done .inner");

      switch (task.status) {
        case "todo":
          todoBoard.innerHTML += `
        <task-component
        id="${task.id}"
        heading="${task.heading}"
        description="${task.description}"
        due-date="${task.dueDate}"
        avatar="${task.avatar}"
        account-url="${task.accountUrl}"
        account-name="${task.accountName}"
      >
      </task-component>`;
          break;

        case "in-progress":
          inProgressBoard.innerHTML += `
        <task-component
        id="${task.id}"
        heading="${task.heading}"
        description="${task.description}"
        due-date="${task.dueDate}"
        avatar="${task.avatar}"
        account-url="${task.accountUrl}"
        account-name="${task.accountName}"
      >
      </task-component>`;

          break;
        case "done":
          doneBoard.innerHTML += `
        <task-component
        id="${task.id}"
        heading="${task.heading}"
        description="${task.description}"
        due-date="${task.dueDate}"
        avatar="${task.avatar}"
        account-url="${task.accountUrl}"
        account-name="${task.accountName}"
      >
      </task-component>`;
          break;
      }
    });
  }
};

export default initData;
