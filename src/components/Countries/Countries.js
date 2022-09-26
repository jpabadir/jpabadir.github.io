import { useEffect } from 'react';

export default function Countries() {
  useEffect(() => {
    window.drawRegionsMap();
  }, []);

  return (
    <div>
      <p>Layovers don't count, and neither does merely driving / passing through a country on one's way to another.</p>
      <div id="regions_div" style={{ widht: '100%' }} />
    </div>
  );
}
