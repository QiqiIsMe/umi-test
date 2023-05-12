import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import styles from  './index.less'
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProLayout, ProCard } from '@ant-design/pro-components';
import { Input } from 'antd';
import React, { useState } from 'react';
import defaultProps from './_defaultProps';

export default () => {
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
  const {state = {}, setRouteCOnfig} = defaultProps();
  const [inputValue, setInputValue] = useState('一一级列表页面');
  return (
    <div
      className={styles.test}
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        
        headerContentRender={()=><></>}
        token={{
        header: {
          colorBgHeader: 'black',
          colorHeaderTitle: '#292f33',
          colorTextMenu: '#292f33',
          colorTextMenuSecondary: '#292f33',
          colorTextMenuSelected: '#292f33',
          colorBgMenuItemSelected: '#292f33',
          colorTextRightActionsItem: '#292f33',
        },
        sider: {
          colorMenuBackground: 'black',
          colorMenuItemDivider: '#dfdfdf',
          colorTextMenu: '#595959',
          colorTextMenuSelected: 'rgba(42,122,251,1)',
          colorBgMenuItemSelected: 'rgba(230,243,254,1)',
        },
      }}
        {...state}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              console.log(item,pathname)
              setInputValue(item.name)
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
        {...settings}
      >
          <div
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <Input value={inputValue} onChange={(e)=>{
              setInputValue(e.target.value);
              setRouteCOnfig(v=>{
                return {
                  ...v,
                  [pathname]:{...v[pathname],name: e.target.value}
                }
              })
            }}/>
          </div>
      </ProLayout>
    </div>
  );
};