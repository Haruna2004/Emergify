export const sidebar_links = [
  { title: "Home", link: "/" },
  { title: "Register", link: "/register" },
  { title: "About Us", link: "/about" },
  { title: "Contact", link: "/contact" },
];

const openingStatements = [
  "Hello, I'm Emergify, here to lend you a calming voice in the storm.",
  "Welcome to voice mode. Remember, in emergencies, staying calm is half the battle won.",
  "Voice mode activated. Let's handle this emergency like pros.",
  "Greetings! Emergify here, your emergency companion through thick and thin.",
  "Voice mode on. Just breathe. We've got this together.",
  "Welcome to voice mode. Stay focused, stay safe. You've got this!",
  "Activated! Emergify, your virtual emergency guide, reporting for duty.",
  "Voice mode initiated. Remember, every problem has a solution—we'll find it.",
  "Hello from Emergify! Let's tackle this emergency with a dash of confidence and a sprinkle of calm.",
];

export function openingStatement() {
  const randomIndex = Math.floor(Math.random() * openingStatements.length);
  return openingStatements[randomIndex];
}
