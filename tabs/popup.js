document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      const tabsList = document.getElementById('tabs-list');
      
      tabs.forEach((tab) => {
        const tabElement = document.createElement('div');
        tabElement.className = 'tab-item' + (tab.active ? ' active' : '');
        tabElement.textContent = tab.title || 'Untitled Tab';
        tabElement.title = tab.url;
        
        tabElement.addEventListener('click', () => {
          chrome.tabs.update(tab.id, { active: true });
          window.close();
        });
        
        tabsList.appendChild(tabElement);
      });
    });
  });