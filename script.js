// Função para calcular o total e atualizar a lista de itens selecionados
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalPriceElement = document.getElementById('total-price');
const itemsSelectedElement = document.getElementById('items-selected');
const whatsappBtn = document.getElementById('whatsapp-btn');
const paymentMethod = document.getElementById('payment-method');

let totalPrice = 0;
let itemsSelected = [];

// Função para atualizar o total e itens selecionados
function updateOrder() {
    totalPrice = 0;
    itemsSelected = [];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            totalPrice += parseFloat(checkbox.value);
            itemsSelected.push(checkbox.dataset.name);
        }
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
    itemsSelectedElement.textContent = itemsSelected.length > 0 ? itemsSelected.join(', ') : "Nenhum item selecionado";
}

// Adicionar evento de mudança para os checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateOrder);
});

// Função para gerar o link do WhatsApp
whatsappBtn.addEventListener('click', () => {
    const payment = paymentMethod.value === "cartao" ? "Cartão" : "Dinheiro";
    const message = `Olá! Gostaria de fazer um pedido. Itens selecionados: ${itemsSelected.join(', ')}. Total: R$ ${totalPrice.toFixed(2)}. Forma de pagamento: ${payment}.`;
    const whatsappLink = `https://wa.me/5561992532093?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
});
