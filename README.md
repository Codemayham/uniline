# Uniline Promotions prototype

Responsive React + Vite catalogue and enquiry website prototype.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

The full products and services catalogue is available at `/products`. Configure the production host to serve `index.html` for this route and other client-side paths.

## Before production

- The catalogue entries and product photos are illustrative sample content; replace them with verified inventory and approved images.
- WhatsApp links use the configured UAE business number in `WHATSAPP_NUMBER` in `src/App.jsx`.
- Quote-form submissions open a prefilled email draft addressed to `info@unilineadvertising.ae`; the visitor must send it from their email app. Use a secure backend with server-side validation and spam protection if server-side delivery is required.
- Configure the production domain and canonical URL before launch.
