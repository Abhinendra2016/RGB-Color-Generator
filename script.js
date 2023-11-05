document.addEventListener("DOMContentLoaded", function () {
    const redSlider = document.getElementById("redslider");
    const blueSlider = document.getElementById("blueslider");
    const greenSlider = document.getElementById("greenslider");
    const redValue = document.getElementById("redvalue");
    const blueValue = document.getElementById("bluevalue");
    const greenValue = document.getElementById("greenvalue");
    const colorBox = document.getElementById("color-box");
    const copyButton = document.getElementById("copyButton");
  
    function updateColor() {
      const red = redSlider.value;
      const blue = blueSlider.value;
      const green = greenSlider.value;
  
      redValue.innerText = red;
      blueValue.innerText = blue;
      greenValue.innerText = green;
  
      const rgbColor = `rgb(${red}, ${green}, ${blue})`;
      colorBox.style.backgroundColor = rgbColor;
    }
  
    redSlider.addEventListener("input", updateColor);
    blueSlider.addEventListener("input", updateColor);
    greenSlider.addEventListener("input", updateColor);
  
    updateColor();
  
    copyButton.addEventListener("click", function () {
      const rgbColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
      const inputType = document.getElementById("inputType");
      inputType.innerText = `Copied: ${rgbColor}`;
      copyToClipboard(rgbColor);
    });
  
    function copyToClipboard(text) {
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }
  });
  