import { Flex, Layout, theme } from 'antd';
import { ReactNode } from 'react';

import styles from './index.module.scss';

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const {
    token: { colorBgContainer, colorBorderSecondary },
  } = theme.useToken();
  return (
    <Layout>
      <Layout.Header style={{ backgroundColor: colorBgContainer, borderBottom: `solid 1px ${colorBorderSecondary}` }}>
        <Flex justify="space-between" align="center">
          <div>LOGO</div>
        </Flex>
      </Layout.Header>
      <Layout>
        <Layout.Content>
          <div className={styles.container}>{children}</div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
