# Music Analytics

Aplicação web integrada à **Spotify Web API** para transformar dados de consumo musical em insights visuais e conteúdo compartilhável.

A proposta central é conectar a conta Spotify do usuário e gerar uma leitura visual do seu perfil musical.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- TanStack React Query
- Radix UI / shadcn
- Spotify Web API
- html-to-image / html2canvas

## Integração com Spotify

O fluxo OAuth solicita os escopos:

- `user-read-email`
- `user-top-read`
- `user-read-recently-played`
- `user-read-playback-state`

Configure uma aplicação no Spotify Developer Dashboard e defina:

```env
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=
NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=
```

## Executando

```bash
git clone https://github.com/eded001/music-analytics.git
cd music-analytics
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Objetivo técnico

O projeto explora autenticação OAuth, consumo de API externa, gerenciamento de estado assíncrono e geração de elementos visuais compartilháveis a partir de dados reais do usuário.
