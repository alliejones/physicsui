export default function createControl(name, initialValue, update) {
  var input = document.getElementById(name);
  var display = document.getElementById(name+'-display');
  input.value = initialValue;
  display.innerText = input.valueAsNumber;
  input.addEventListener('input', function (e) {
    update(e.target.valueAsNumber);
    display.innerText = e.target.valueAsNumber;
  });
}
