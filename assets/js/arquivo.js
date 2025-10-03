// Gráfico de barras - Antes x Depois
const ctx1 = document.getElementById('economiaChart').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Antes do Projeto', 'Depois do Projeto'],
        datasets: [{
            label: 'Consumo de Água (Litros/mês)',
            data: [1000, 600], // valores de exemplo
            backgroundColor: ['#ff6b6b', '#3aafa9']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: {
                display: true,
                text: 'Redução do Consumo de Água Potável'
            }
        }
    }
});

// Gráfico de linha - Economia mensal
const ctx2 = document.getElementById('linhaChart').getContext('2d');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
        datasets: [{
            label: 'Litros de Água Economizados',
            data: [50, 120, 200, 280, 350, 420, 500, 600], // valores simulados
            borderColor: '#2b7a78',
            backgroundColor: 'rgba(58, 175, 169, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: {
                display: true,
                text: 'Economia de Água ao Longo dos Meses'
            }
        }
    }
});