const fs = require('fs');
const path = require('path');

const write = (file, content) => {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, content.trim() + '\n', 'utf8');
};

// 1. DATA
write('lib/data/services.ts', `
export const services = [
  {
    id: 'steam-cleaning',
    title: 'Steam Cleaning',
    slug: '/services/steam-cleaning',
    description: 'Deep, professional steam cleaning designed to refresh high-use surfaces and help your property feel cleaner, fresher, and well cared for.',
  },
  {
    id: 'strip-and-polish',
    title: 'Strip & Polish',
    slug: '/services/strip-and-polish',
    description: 'A professional surface-care solution that helps restore presentation, improve finish, and keep hard flooring looking its best.',
  },
  {
    id: 'property-maintenance',
    title: 'Property Maintenance',
    slug: '/services/property-maintenance',
    description: 'Practical property maintenance support focused on keeping spaces presentable, functional, and properly maintained.',
  }
];
`);

// 2. PAGES
const pages = {
  'app/services/page.tsx': `
import Link from 'next/link';

export const metadata = { title: 'Property Services Melbourne | MPM Services' };

export default function ServicesPage() {
  return (
    <main className="container" style={{ padding: '4rem 2rem' }}>
      <h1>Professional Property Services in Melbourne</h1>
      <p>MPM Services focuses on three core service areas designed to keep properties clean, presentable, and properly maintained.</p>
      <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
        <div className="card">
          <h2>Steam Cleaning</h2>
          <p>Deep cleaning solutions designed to refresh carpets, upholstery and other suitable surfaces.</p>
          <Link href="/services/steam-cleaning" className="btn btn-primary">Explore Steam Cleaning</Link>
        </div>
        <div className="card">
          <h2>Strip & Polish</h2>
          <p>Restore hard flooring surfaces with a cleaner, more polished finish.</p>
          <Link href="/services/strip-and-polish" className="btn btn-primary">Explore Strip & Polish</Link>
        </div>
        <div className="card">
          <h2>Property Maintenance</h2>
          <p>Practical property maintenance solutions to help keep spaces presentable and well cared for.</p>
          <Link href="/services/property-maintenance" className="btn btn-primary">Explore Property Maintenance</Link>
        </div>
      </div>
    </main>
  );
}
`,
  'app/services/steam-cleaning/page.tsx': `
import Link from 'next/link';
export const metadata = { title: 'Steam Cleaning Melbourne | MPM Services' };

export default function SteamCleaning() {
  return (
    <main className="container" style={{ padding: '4rem 2rem' }}>
      <h1>Steam Cleaning That Refreshes Your Space</h1>
      <p>Professional steam cleaning for properties that need a deeper, fresher finish.</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>What the service is</h2>
        <p>Deep cleaning solutions designed to refresh carpets, upholstery and other suitable surfaces like sofas and dining chairs.</p>
        <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>Get a Quote</Link>
      </div>
    </main>
  );
}
`,
  'app/services/strip-and-polish/page.tsx': `
import Link from 'next/link';
export const metadata = { title: 'Strip & Polish Melbourne | MPM Services' };

export default function StripAndPolish() {
  return (
    <main className="container" style={{ padding: '4rem 2rem' }}>
      <h1>Restore the Finish. Improve the Presentation.</h1>
      <p>Professional strip and polish services to help hard floors look cleaner, fresher, and better maintained.</p>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
      </div>
    </main>
  );
}
`,
  'app/services/property-maintenance/page.tsx': `
import Link from 'next/link';
export const metadata = { title: 'Property Maintenance Melbourne | MPM Services' };

export default function PropertyMaintenance() {
  return (
    <main className="container" style={{ padding: '4rem 2rem' }}>
      <h1>Keep Your Property Looking Its Best</h1>
      <p>Practical property maintenance support designed to help keep spaces presentable, functional, and cared for.</p>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
      </div>
    </main>
  );
}
`,
  'app/gallery/page.tsx': `
export const metadata = { title: 'MPM Services Gallery | Property Services Melbourne' };

export default function GalleryPage() {
  return (
    <main className="container" style={{ padding: '4rem 2rem' }}>
      <h1>Our Work & Results</h1>
      <p>A visual look at the quality and care behind our property services.</p>
      <p><em>(Gallery grid with filters will be displayed here)</em></p>
    </main>
  );
}
`,
  'app/reviews/page.tsx': `
export const metadata = { title: 'MPM Services Reviews | Melbourne Property Services' };

export default function ReviewsPage() {
  return (
    <main className="container" style={{ padding: '4rem 2rem' }}>
      <h1>What Clients Say About MPM Services</h1>
      <p>See our reviews below (DEMO CONTENT).</p>
      <div className="card" style={{ marginTop: '2rem' }}>
        <p>"Great service! Very professional." - Sample Reviewer</p>
      </div>
    </main>
  );
}
`,
  'app/contact/page.tsx': `
export const metadata = { title: 'Contact MPM Services | Melbourne Property Services' };

export default function ContactPage() {
  return (
    <main className="container" style={{ padding: '4rem 2rem' }}>
      <h1>Let’s Talk About Your Property</h1>
      <p>Tell us a little about what you need and the MPM Services team can help you take the next step.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
        <div>
          <h3>Contact Details</h3>
          <p><strong>Phone:</strong> +61 451 460 307</p>
          <p><strong>Email:</strong> info@mpmservices.com.au</p>
          <p><strong>Location:</strong> Melbourne, VIC, Australia 3000</p>
        </div>
        <div>
          <h3>Request a Quote</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => { e.preventDefault(); alert('Thanks! Your request has been received. We\\'ll be in touch soon.'); }}>
            <input type="text" placeholder="Full Name" required style={{ padding: '0.5rem' }} />
            <input type="email" placeholder="Email" required style={{ padding: '0.5rem' }} />
            <input type="tel" placeholder="Phone" required style={{ padding: '0.5rem' }} />
            <select required style={{ padding: '0.5rem' }}>
              <option value="">Select Service...</option>
              <option value="steam-cleaning">Steam Cleaning</option>
              <option value="strip-and-polish">Strip & Polish</option>
              <option value="property-maintenance">Property Maintenance</option>
            </select>
            <textarea placeholder="Message" rows={4} required style={{ padding: '0.5rem' }}></textarea>
            <button type="submit" className="btn btn-primary">Submit Request</button>
          </form>
        </div>
      </div>
    </main>
  );
}
`
};

for (const [file, content] of Object.entries(pages)) {
  write(file, content);
}

// 3. Update globals.css to ensure cards look okay
const cssAppend = `
.card {
  background: var(--bg-white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #eaeaea;
}

.card h2 {
  margin-top: 0;
}
`;
fs.appendFileSync('app/globals.css', cssAppend);

console.log("Frontend scaffolded successfully.");
