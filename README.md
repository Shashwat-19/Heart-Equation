
# Heart Equation Animation

This project visualizes the heart equation with a dynamic graph animated using HTML, CSS, and JavaScript. The graph dynamically changes as the value of \( k \) increases over time, showcasing the beautiful heart shape in a visually appealing way.

---

## **Heart Equation**

The equation plotted in the graph is:

\[
y = x^{\frac{2}{3}} + 0.9 \sin(kx) \sqrt{3 - x^2}
\]

Where:
- \( x \) ranges from \(-2\) to \(2\)
- \( k \) increases from 0 to 100 during the animation.

---

## **Features**

- **Dynamic Graph**: The heart equation is animated by incrementing \( k \) smoothly.
- **Responsive Design**: The canvas adapts to different screen sizes.
- **Axes and Labels**: Displays \( x \)-axis and \( y \)-axis for better visual clarity.
- **Equation Display**: Dynamically updates the value of \( k \) during animation.

---

## **Project Structure**

```plaintext
Heart-Equation-Animation/
├── index.html    # HTML structure
├── style.css     # Styling for canvas and labels
├── script.js     # Logic for animation and graph rendering
└── README.md     # Project documentation
```

---

## **How to Run**

1. Clone or download this repository.
2. Open the `index.html` file in any modern browser.
3. Watch the animation of the heart equation.

---

## **Technologies Used**

- **HTML**: For structuring the page.
- **CSS**: For styling the canvas and equation display.
- **JavaScript**: For rendering the graph and animating the equation.

---

## **Preview**

![Heart Equation Animation](https://via.placeholder.com/800x400.png?text=Preview+Image)

---

## **Customization**

- Adjust the **scale** in the `script.js` file to resize the heart:
  ```javascript
  const scale = Math.min(width, height) / 6; // Adjust scaling here
  ```
- Change the animation speed by modifying the increment for \( k \):
  ```javascript
  k += 0.5; // Increase or decrease for faster/slower animation
  ```

---

## **Contributing**

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

---

## **License**

This project is licensed under the MIT License.

--- 

Let me know if you want any further additions!