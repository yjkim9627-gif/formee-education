// Shared by every components/ai-social-media and components/shared demo page (see demo-nav.css).
// Each group's initial expanded/collapsed state is baked into that page's own static HTML —
// this only handles the click.
function toggleDemoGroup(btn){
  btn.parentElement.classList.toggle('collapsed');
}
