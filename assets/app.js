
// Simple interactivity: smooth scroll for in-page links and small modal demo
document.addEventListener('click', function(e){
  if(e.target.matches('a[href^="#"]')){
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  }
});

// keyboard shortcut: press 'p' to open profile page (demo of interactivity)
document.addEventListener('keydown', function(e){
  if(e.key === 'p' || e.key === 'P'){
    window.location.href = 'profile.html';
  }
});
