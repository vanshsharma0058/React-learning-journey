## How to call the function

## Event Listener

-Onclick="when user is clicked this listener is run usually this listener is apply on button"
-OnChange="when user is typing in input this listener is active usually this listener is run on input tag"
-OnMouse-"when user is enter,leaving or more mouse event then this is active"

## How to pass the value in Listener like onClick={input("pass the attribute")}

-make a function in listener then call the function and pass the value in this
example-

```
<input
        onChange={function (elem) {
          inputchange(elem.target.value);
        }}
        type="text"
        placeholder="enter name "
      />

```

## Some more

-use clientX,clientY for knowing the value of fx-axis and y-axis

-Use onWheel listener to track the activity of scroll
-page scrolling speed find by [deltaY]
