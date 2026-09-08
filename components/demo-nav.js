// Shared by every components/ai-social-media and components/shared demo page (see demo-nav.css).
// Each group's initial expanded/collapsed state is baked into that page's own static HTML —
// this only handles the click.
function toggleDemoGroup(btn){
  btn.parentElement.classList.toggle('collapsed');
}

// Sidebar search — injected on load rather than baked into each demo page's own static HTML
// (60+ files across ai-social-media and shared), so every page picks it up automatically from
// this one shared script instead of needing every page edited. Filters the sidebar's own
// links by substring match: a group with zero matches hides entirely, a group with at least
// one match force-expands regardless of its normal baked-in collapsed state, and clearing the
// box restores exactly whatever collapsed/expanded state the page loaded with.
(function(){
  function init(){
    const sidebar = document.querySelector('.demo-sidebar');
    const home = document.querySelector('.demo-sidebar-home');
    if(!sidebar || !home) return;

    const wrap = document.createElement('div');
    wrap.className = 'demo-sidebar-search-wrap';
    wrap.innerHTML = '<input type="search" class="demo-sidebar-search" placeholder="Search components…" aria-label="Search components">';
    home.insertAdjacentElement('afterend', wrap);
    const input = wrap.querySelector('input');

    const groups = Array.from(sidebar.querySelectorAll('.demo-sidebar-group'));
    const originalCollapsed = groups.map(g => g.classList.contains('collapsed'));

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if(!q){
        groups.forEach((g, i) => {
          g.style.display = '';
          g.classList.toggle('collapsed', originalCollapsed[i]);
          g.querySelectorAll('a').forEach(a => { a.style.display = ''; });
        });
        return;
      }
      groups.forEach(g => {
        let anyMatch = false;
        g.querySelectorAll('a').forEach(a => {
          const match = a.textContent.toLowerCase().includes(q);
          a.style.display = match ? '' : 'none';
          if(match) anyMatch = true;
        });
        g.style.display = anyMatch ? '' : 'none';
        if(anyMatch) g.classList.remove('collapsed');
      });
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
