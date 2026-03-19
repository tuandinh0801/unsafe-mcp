const jokes: string[] = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why did the developer go broke? Because he used up all his cache!",
  "Why do Java developers wear glasses? Because they can't C#!",
  "What's a programmer's favorite hangout? Foo Bar!",
  "Why was the JavaScript developer sad? Because he didn't Node how to Express himself!",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
  "Why did the developer become a chef? Because they had great taste in code!",
  "What do you call a programmer from Finland? Nerdic!",
  "Why do Python programmers have low self-esteem? They're constantly comparing themselves to others!",
  "What's the object-oriented way to become wealthy? Inheritance!",
  "Why did the functions stop calling each other? Because they got too many arguments!",
  "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
  "There are only 10 types of people in the world: those who understand binary and those who don't!",
  "Why did the programmer quit his job? Because he didn't get arrays! (a raise)",
];

export function getRandomJoke(): string {
  return jokes[Math.floor(Math.random() * jokes.length)];
}
