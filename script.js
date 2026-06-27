function showPage(pageId) {
  // 1. Hide all pages
  const pages = document.querySelectorAll('.page-view');
  pages.forEach(page => {
    page.classList.remove('active-view');
  });

  // 2. Show the targeted selected page
  const targetPage = document.getElementById('page-' + pageId);
  if (targetPage) {
    targetPage.classList.add('active-view');
  }

  // 3. Clear active navigation design style highlight
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Highlight the current tab
  const activeLink = document.getElementById('nav-' + pageId);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Smooth scroll back up to the top of the browser view
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
