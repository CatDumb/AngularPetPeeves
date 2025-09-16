import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { config as serverConfig } from './app/app.config.server';

export const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(
    App,
    {
      ...(appConfig ?? {}),
      ...(serverConfig ?? {}),
      providers: [
        ...((appConfig?.providers as any[]) ?? []),
        ...((serverConfig?.providers as any[]) ?? []),
      ],
    },
    context
  );

export default bootstrap;
