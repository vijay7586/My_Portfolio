import React from 'react';
import { profile } from '../data/portfolioData';

const Footer = () => (
  <footer className="border-t border-line/40">
    <div className="mx-auto max-w-6xl px-5 py-8 text-center sm:px-8">
      <p className="text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
