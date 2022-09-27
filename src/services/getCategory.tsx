export function getCategory(value: string) {
  switch (value) {
    case "task":
      return "Task";
    case "Task":
      return "Task";
    case "random_thought":
      return "Random Thought";
    case "Random Thought":
      return "Random Thought";
    case "idea":
      return "Idea";
    case "Idea":
      return "Idea";
    default:
      break;
  }
}
