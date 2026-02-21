/**
 * Course Map Interactive Features
 * ================================
 * Handles hover tooltips and click details for the City Park Golf Course map
 */

(function () {
  'use strict';

  const holeMarkers = document.querySelectorAll('.hole-marker');
  const detailsPanel = document.getElementById('holeDetails');

  if (!holeMarkers.length || !detailsPanel) return;

  // Panel elements
  const panelClose = detailsPanel.querySelector('.panel-close');
  const panelHoleNumber = detailsPanel.querySelector('.hole-number');
  const panelHolePar = detailsPanel.querySelector('.hole-par');
  const panelYardage = detailsPanel.querySelector('.hole-yardage');
  const panelTip = detailsPanel.querySelector('.hole-tip');
  const panelBadges = detailsPanel.querySelector('.hole-badges');

  // Create tooltip element
  const tooltip = document.createElement('div');
  tooltip.className = 'map-tooltip';
  tooltip.innerHTML = '<span class="tooltip-hole"></span><span class="tooltip-info"></span>';
  document.body.appendChild(tooltip);

  const tooltipHole = tooltip.querySelector('.tooltip-hole');
  const tooltipInfo = tooltip.querySelector('.tooltip-info');

  // Hover handlers for tooltips
  holeMarkers.forEach(marker => {
    marker.addEventListener('mouseenter', (e) => {
      const hole = marker.dataset.hole;
      const par = marker.dataset.par;
      const yards = marker.dataset.yards;

      tooltipHole.textContent = `Hole ${hole}`;
      tooltipInfo.textContent = `Par ${par} • ${yards} yds`;

      tooltip.classList.add('visible');
      updateTooltipPosition(e);

      // Add hover class for glow effect
      marker.classList.add('hovered');
    });

    marker.addEventListener('mouseleave', () => {
      tooltip.classList.remove('visible');
      marker.classList.remove('hovered');
    });

    marker.addEventListener('mousemove', updateTooltipPosition);

    // Click handler for details panel
    marker.addEventListener('click', () => {
      const hole = marker.dataset.hole;
      const par = marker.dataset.par;
      const yards = marker.dataset.yards;
      const tip = marker.dataset.tip;
      const isSignature = marker.dataset.signature === 'true';

      // Update panel content
      panelHoleNumber.textContent = `Hole ${hole}`;
      panelHolePar.textContent = `Par ${par}`;
      panelYardage.textContent = `${yards} yards`;
      panelTip.textContent = tip;

      // Update badges
      panelBadges.innerHTML = '';
      if (isSignature) {
        const badge = document.createElement('span');
        badge.className = 'hole-badge signature';
        badge.textContent = 'Signature Hole';
        panelBadges.appendChild(badge);
      }

      // Par type badge
      const parBadge = document.createElement('span');
      parBadge.className = `hole-badge par-${par}`;
      parBadge.textContent = par === '3' ? 'Par 3' : par === '4' ? 'Par 4' : 'Par 5';
      panelBadges.appendChild(parBadge);

      // Show panel
      detailsPanel.classList.add('visible');

      // Highlight selected marker
      holeMarkers.forEach(m => m.classList.remove('selected'));
      marker.classList.add('selected');
    });
  });

  // Close panel
  panelClose.addEventListener('click', () => {
    detailsPanel.classList.remove('visible');
    holeMarkers.forEach(m => m.classList.remove('selected'));
  });

  // Close panel on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailsPanel.classList.contains('visible')) {
      detailsPanel.classList.remove('visible');
      holeMarkers.forEach(m => m.classList.remove('selected'));
    }
  });

  // Update tooltip position
  function updateTooltipPosition(e) {
    const x = e.clientX + 15;
    const y = e.clientY - 10;

    // Keep tooltip on screen
    const tooltipRect = tooltip.getBoundingClientRect();
    const maxX = window.innerWidth - tooltipRect.width - 10;
    const maxY = window.innerHeight - tooltipRect.height - 10;

    tooltip.style.left = Math.min(x, maxX) + 'px';
    tooltip.style.top = Math.min(Math.max(10, y), maxY) + 'px';
  }

  // Make markers keyboard accessible
  holeMarkers.forEach(marker => {
    marker.setAttribute('tabindex', '0');
    marker.setAttribute('role', 'button');
    marker.setAttribute('aria-label', `Hole ${marker.dataset.hole}, Par ${marker.dataset.par}, ${marker.dataset.yards} yards`);

    marker.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        marker.click();
      }
    });
  });

  // Add cursor pointer style to markers
  const style = document.createElement('style');
  style.textContent = `
    .hole-marker { cursor: pointer; }
    .hole-marker:focus { outline: 2px solid var(--clr-gold); outline-offset: 2px; }
  `;
  document.head.appendChild(style);

})();
