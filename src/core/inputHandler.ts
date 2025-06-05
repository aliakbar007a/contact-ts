// import readline from 'readline';

// export function askQuestion(query: string): Promise<string> {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   return new Promise(resolve => {
//     rl.question(query, answer => {
//       rl.close();
//       resolve(answer.trim());
//     });
//   });
// }
////////////////////////////////////////////////////////////////////////////////////

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

export function closeInput(): void {
  rl.close();
}
