export function getIcon(category: string) {
  let icon: string = "";

  switch (category) {
    case "task":
      icon = "fa-list-check";
      break;
    case "Task":
      icon = "fa-list-check";
      break;
    case "random_thought":
      icon = "fa-star";
      break;
    case "Random Thought":
      icon = "fa-star";
      break;
    case "idea":
      icon = "fa-lightbulb";
      break;
    case "Idea":
      icon = "fa-lightbulb";
      break;
  }

  return icon;
}
