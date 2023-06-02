// Obtener referencias a los elementos del formulario
const form = document.getElementById('order-form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const productSelect = document.getElementById('product');
const emailInput = document.getElementById('email');

// Escuchar el evento submit del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario de manera predeterminada

  // Obtener los valores de los campos del formulario
  const name = nameInput.value;
  const phone = phoneInput.value;
  const product = productSelect.value;
  const email = emailInput.value;

  // Realizar alguna validación de los datos (opcional)

  // Enviar los datos a través de una solicitud HTTP o realizar alguna acción adicional
  // Aquí puedes agregar tu lógica para enviar los datos del pedido

  // Limpiar los campos del formulario después de enviar el pedido
  nameInput.value = '';
  phoneInput.value = '';
  productSelect.value = '';
  emailInput.value = '';

  // Mostrar un mensaje de confirmación al usuario (opcional)
  alert('¡Gracias por tu pedido! Nos pondremos en contacto contigo pronto.');
});
