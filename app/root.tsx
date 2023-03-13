import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import fonts from '@filament-theme/fonts';
import { cssBundleHref } from '@remix-run/css-bundle';
import { Button } from '@filament/react';

import { base } from '@filament-theme/base';
import { ddls, DLSProfessional } from '@filament-theme/ddls';

// console.log(cssBundleHref);

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: fonts },
    ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        className={`${ddls} ${DLSProfessional.groupBlueLight} ${DLSProfessional.orangeDarkAccent} ${DLSProfessional.main} ${base}`}
      >
        <Button>yeah</Button>
        <Button variant="primary">yeah</Button>
        <Button variant="secondary">yeah</Button>
        <Button variant="quiet">yeah</Button>
        <Button variant="quiet">yeah</Button>
        <Button variant="quietEmphasis">yeadsddash</Button>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
