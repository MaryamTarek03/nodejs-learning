# Summary of Learnings: Day 02 JS Advanced

---

## JavaScript Advanced Concepts

This repository contains notes on advanced JavaScript topics, summarized below:

- **Error Handling**: Use `try/catch` for handling errors from external inputs or recoverable issues. Avoid masking bad code; use `?.` and `??` for safer access. Throw errors with `throw new Error()`. Handle async errors with try/catch in async/await.
- **Modules**: Organize code with ES modules (`export`/`import`). Enable with `"type": "module"` in `package.json`. Use `<script type="module">` in browsers.
- **Destructuring**: Extract array elements or object properties into variables. Supports aliases and does not modify originals.
  ```js
  const [first, , third] = ['A', 'B', 'C']; // first = 'A', third = 'C'
  const { title: gameTitle } = { title: 'Hollow Knight' }; // gameTitle = 'Hollow Knight'
  ```
- **Functions**: Hoisting works for regular functions, not arrow/variable functions. Callbacks handle async tasks; `setTimeout`/`setInterval` manage delays/repetition. Arrow functions preserve `this`.
- **Objects**: Use PascalCase functions as constructors. Objects are references; changes affect all pointers. Shorthand syntax simplifies property/method definitions.
- **JSON**: Lightweight, language-independent data format. Convert to/from objects with `JSON.stringify`/`JSON.parse`. Store in `localStorage` as strings.
- **Asynchronous Programming**:
  - **Callbacks**: Older async method; prone to nesting issues.
  - **Promises**: Handle async with `resolve`/`reject`. Use `.then()`, `.catch()`, `.finally()`, and `Promise.all()` for concurrent promises.
  - **Fetch**: Returns Promises for HTTP requests.
  - **Async/Await**: Simplifies Promise handling; use `await` in `async` functions with try/catch for errors.
  ```js
  async function loadGames() {
      try {
          const data = await (await fetch('https://api.example.com/games')).json();
          console.log(data);
      } catch (error) {
          console.error('Error:', error);
      }
  }
  ```

See the markdown files for detailed notes and examples.