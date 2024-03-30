function changeLanguage(select) {
    var selectedOption = select.value;
    var baseUrl = window.location.origin;
    var path = window.location.pathname;
    
    // Визначаємо шлях до потрібної мовної версії сторінки
    var newPath = path.replace(/_(en|ru|th)\.html$/, '') + '_' + selectedOption + '.html';
    
    // Перенаправляємо користувача на вибрану мовну версію
    console.log("click")
    window.location.href = baseUrl + newPath;
  }