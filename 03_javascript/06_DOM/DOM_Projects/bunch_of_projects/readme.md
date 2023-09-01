# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "grey":
                body.style.background = e.target.id;
                break;
            case "white":
                body.style.background = e.target.id;
                break;
            case "blue":
                body.style.background = e.target.id;
                break;
            case "yellow":
                body.style.background = e.target.id;
                break;
        }
    });
});
```
