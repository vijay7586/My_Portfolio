export const publicAsset = (path) => {
  const base = process.env.PUBLIC_URL || '';
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
};

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
