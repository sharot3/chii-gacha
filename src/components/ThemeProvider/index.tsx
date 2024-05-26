import { App, ConfigProvider, ThemeConfig } from 'antd';
import { ReactNode } from 'react';

const theme: ThemeConfig = {
  cssVar: true,
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ConfigProvider button={{ autoInsertSpace: false }} theme={theme}>
    <App
      notification={{
        placement: 'bottom',
        duration: 4.5,
      }}
    >
      {children}
    </App>
  </ConfigProvider>
);
