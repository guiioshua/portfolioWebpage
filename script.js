// Seleciona todos os botões e seções
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// Adiciona um event listener para cada botão
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões e seções
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(tabContent => tabContent.classList.remove('active'));

        // Adiciona a classe 'active' ao botão e seção clicados
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});