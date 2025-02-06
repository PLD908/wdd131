        const products = [
            { id: 1, name: "Smart Watch Pro" },
            { id: 2, name: "Wireless Earbuds Plus" },
            { id: 3, name: "Laptop Ultra" },
            { id: 4, name: "Gaming Console X" },
            { id: 5, name: "Smartphone Max" }
        ];

        const productSelect = document.getElementById('productName');
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });

        const starLabels = document.querySelectorAll('.star-label');
        starLabels.forEach((label, index) => {
            label.addEventListener('mouseover', () => {
                for (let i = 0; i <= index; i++) {
                    starLabels[i].style.color = 'gold';
                }
            });

            label.addEventListener('mouseout', () => {
                starLabels.forEach(label => {
                    if (!label.previousElementSibling.checked) {
                        label.style.color = '#ddd';
                    }
                });
            });
        });