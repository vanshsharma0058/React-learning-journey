## How to handle the form

- When i submit the form, form have default behaviour of re-loading .
- To prevent the default behaviour of form use `preventDefault()` method to stop the re-loading

## Example

```jsx
<form
  onSubmit={(e) => {
    e.preventDefault();
    submithandler();
  }}
>
  <input type="text" placeholder="enter your name" />
  <button>Submit</button>
</form>
```

## What is two-way binding

-Simply two way binding is to handle the input ,you don't write directly in your page you use react as a middlemen.
-You use useState

## Example

```jsx
const App = () => {
  // Two way binding

  const [title, settitle] = useState("");

  // Form handling
  const submithandler = (e) => {
    console.log("form is submit ", title);
    settitle("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submithandler(e);
        }}
      >
        <input
          type="text"
          placeholder="enter your name"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
```
