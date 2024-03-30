function changeLanguage(select) {
    var selectedOption = select.value;
    var baseUrl = window.location.origin;
    var path = window.location.pathname;
  
    // Визначаємо базову частину шляху (без суфікса мови і розширення .html)
    var basePath = path.replace(/_(en|ru|th)\.html$/, '').replace(/\.html$/, '');
  
    // Враховуємо, що для основної мови ми використовуємо файл index.html без суфікса
    var newPath;
    if(selectedOption === "en") { // Припустимо, що англійська мова є основною і використовує index.html
      newPath = basePath + '.html'; // для англійської версії
    } else {
      newPath = basePath + '_' + selectedOption + '.html'; // для інших мов
    }
  
    // Перенаправляємо користувача на вибрану мовну версію
    window.location.href = baseUrl + newPath;
  }
  