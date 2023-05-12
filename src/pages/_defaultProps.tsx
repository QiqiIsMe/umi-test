import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from '@ant-design/icons';
import { useMemo, useState } from 'react';

export default () => {
  const [routeConfig, setRouteCOnfig] = useState({
    '/list/sub-page/sub-sub-page2': {path: 'sub-sub-page2', name: '一二级列表页面'},
    '/list/sub-page/sub-sub-page1': {path: 'sub-sub-page1', name: '一一级列表页面'},
    '/list/sub-page/sub-sub-page3': {path: 'sub-sub-page3', name: '一三级列表页面'},
    '/list/sub-page2': {path: '/list/sub-page2', name: '二级列表页面'},
    '/list/sub-page3': {path: '/list/sub-page3', name: '三级列表页面'},
  })
  const state = useMemo(()=>({
    route: {
      path: '/',
      routes: [
        {
          name: '列表页',
          icon: <TabletFilled />,
          path: '/list',
          component: './ListTableList',
          routes: [
            {
              path: '/list/sub-page',
              name: '列表页面',
              icon: <CrownFilled />,
              routes: [
                {
                  path:routeConfig['/list/sub-page/sub-sub-page1'].path,
                  name: routeConfig['/list/sub-page/sub-sub-page1'].name,
                  icon: <CrownFilled />,
                  component: './Welcome',
                },
                {
                  path:routeConfig['/list/sub-page/sub-sub-page2'].path,
                  name: routeConfig['/list/sub-page/sub-sub-page2'].name,
                  icon: <CrownFilled />,
                  component: './Welcome',
                },
                {
                  path:routeConfig['/list/sub-page/sub-sub-page3'].path,
                  name: routeConfig['/list/sub-page/sub-sub-page3'].name,
                  icon: <CrownFilled />,
                  component: './Welcome',
                },
              ],
            },
            {
                  path:routeConfig['/list/sub-page2'].path,
                  name:routeConfig['/list/sub-page2'].name,
              icon: <CrownFilled />,
              component: './Welcome',
            },
            {
                  name:routeConfig['/list/sub-page3'].name,
                  path:routeConfig['/list/sub-page3'].path,
              icon: <CrownFilled />,
              component: './Welcome',
            },
          ],
        },
      ],
    },
    location: {
      pathname: '/',
    },
  }), [routeConfig])
  return {state, setRouteCOnfig}
};
