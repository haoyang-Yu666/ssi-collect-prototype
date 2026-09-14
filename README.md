# SSI Collect Prototype

SSI Collect Prototype is a high-fidelity interactive web prototype for an internal headset and wristband data-collection app.

The prototype focuses on the product flow for connecting devices, assigning headset / left wristband / right wristband slots, checking device status, previewing multi-channel recording, uploading data, maintaining firmware, and managing app settings.

## Features

- Login and internal account entry screen
- Saved-device list and empty-device state
- Add-device flow with Bluetooth scan and QR binding
- Device pairing and grouping flow
- Secondary confirmation when rebinding an existing device group
- Current acquisition device group dashboard
- Headset and wristband detail pages
- Wi-Fi configuration, SD card status, and recording-file views
- Multi-channel preview and start / stop collection interaction
- Firmware OTA and diagnostic-log upload dialogs
- Settings page with language toggle and logout flow

## Tech Stack

- React 19
- Vinext
- Vite
- TypeScript

The main prototype UI is implemented in `public/prototype.html` and rendered through `app/page.tsx`.

## Getting Started

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the existing smoke test:

```bash
npm test
```

## Deployment

This project can be deployed as a standard Vinext / Vite web app.

Suggested options:

- Cloudflare Pages / Workers
- Vercel
- Netlify
- GitHub Pages after exporting or adapting the build output

The repository also contains `.openai/hosting.json`, which records the original ChatGPT Sites deployment metadata. It does not contain secrets.

## Notes

This is a product prototype, not a production mobile app. It simulates app screens and interactions in the browser. Real hardware communication, account authentication, device firmware APIs, and backend data services need to be implemented separately before production use.

## License

MIT
