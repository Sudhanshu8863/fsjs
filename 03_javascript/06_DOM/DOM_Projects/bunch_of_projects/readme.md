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

## project 2 solution

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `invalid hieght ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `invalid input ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi} </span>`;
        if (bmi < 18.6) {
            const span = document.createElement("span");
            span.innerText = "Under Weight";
            result.appendChild(span);
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            const span = document.createElement("span");
            span.innerText = "Normal Weight";
            result.appendChild(span);
        } else {
            const span = document.createElement("span");
            span.innerText = "Over Weight";
            result.appendChild(span);
        }
    }
});
```
