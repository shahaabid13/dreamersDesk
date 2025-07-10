  document.getElementById('seeMoreBtn').addEventListener('click', function () {
    const hiddenItems = document.querySelectorAll('.more-item');
    hiddenItems.forEach(item => item.classList.remove('d-none'));
    this.style.display = 'none'; 
  });